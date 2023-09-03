---
slug: install-docker-on-remote-server-using-ansible.md
title: Install Docker on Remote Server using Ansible
authors: danielcristho
tags: [docker, ansible]
enableComments: true # for Gisqus
# countApiKey: d6943a35-55d6-495e-8f03-92600d04b1f1
---

Long time no see, now i will show you how to install Docker using Ansible Playbook. Let's start!!!

## Setup
First, you need to install Ansible. Just follow this link to install Ansible on your operating system [installation guide](https://docs.ansible.com/ansible/latest/installation_guide/index.html).

After installation, create new directory called `ansible-docker`.

```bash
$ mkdir ansible-docker && cd ansible-docker
```
Create a new file called `ansible.cfg` as the Ansible configuration setting and then define the inventory file.

```bash
[defaults]
inventory = hosts
host_key_checking = True
deprecation_warnings = False
collections = ansible.posix, community.general
```

Then create a new file called `hosts`, where the name is defined on `ansible.cfg`.

```bash
[example-server]
0.0.0.0 ansible_user=root
```
NB: Don't forget to change the IP Address and host name.

After setup the Ansible configuration setting & inventory file, let's create a **YAML** file called `playbook.yml`

```yaml
---
- name: Setup Docker on Ubuntu Server 22.04
  hosts: all
  become: true
  remote_user: root
  roles:
    - config
    - docker
```
Then create roles directory:
- Config, On this directory I will create a directory called tasks. After that, I should create yaml file called `main.yml` to run update, upgrade & install many dependencies.

```yml
---
- name: Update&Upgrade
  ansible.builtin.apt:
    name: aptitude
    state: present
    update_cache: true

- name: Install dependencies
  ansible.builtin.apt:
    name:
      - net-tools
      - apt-transport-https
      - ca-certificates
      - curl
      - software-properties-common
      - python3-pip
      - virtualenv
      - python3-setuptools
      - gnupg-agent
      - autoconf
      - dpkg-dev
      - file
      - g++
      - gcc
      - libc-dev
      - make
      - pkg-config
      - re2c
      - wget
    state: present
    update_cache: true
```

- Docker, On this directory create 2 directories called `tasks` & `templates`.

On tasks directory create new file called `main.yml`. This file contains *Docker installation, Docker Compose installation & private registry setup*.

```yml
---
- name: Add Docker GPG apt Key
  ansible.builtin.apt_key:
    url: https://download.docker.com/linux/ubuntu/gpg
    state: present

- name: Add repository into sources list
  ansible.builtin.apt_repository:
    repo: deb [arch=amd64] https://download.docker.com/linux/ubuntu {{ ansible_lsb.codename }} stable
    state: present
    filename: docker

- name: Install Docker 23.0.1-1
  ansible.builtin.apt:
    name:
      - docker-ce=5:23.0.1-1~ubuntu.22.04~jammy
      - docker-ce-cli=5:23.0.1-1~ubuntu.22.04~jammy
      - containerd.io
    state: present
    update_cache: true

- name: Setup docker user
  ansible.builtin.user:
    name: docker
    groups: "docker"
    append: true
    sudo_user: yes

- name: Install Docker module for Python
  ansible.builtin.pip:
    name: docker

- name: Install Docker-Compose&Set Permission
  ansible.builtin.get_url:
    url: https://github.com/docker/compose/releases/download/1.29.2/docker-compose-Linux-x86_64
    dest: /usr/local/bin/docker-compose
    mode: '755'

- name: Create Docker-Compose symlink
  ansible.builtin.command:
    cmd: ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    creates: /usr/bin/docker-compose

- name: Add private registry
  ansible.builtin.template:
    src: daemon.j2
    dest: /etc/docker/daemon.json
    mode: preserve

- name: Restart Docker
  ansible.builtin.service:
    name: docker
    state: restarted
    enabled: true
```
In the template, create a template file using a jinja file named `daemon.j2`. This file contains configuration for private registry settings (optional).
```json
{
    "insecure-registries" : ["http://0.0.0.0:5000"]
}
```
NB: Field the IP using your remote server private IP

After all setup, Your project directory should look like this:
```bash
$ tree
.
├── ansible.cfg
├── config
│   └── tasks
│       └── main.yml
├── docker
│   ├── tasks
│   │   └── main.yml
│   └── templates
│       └── daemon.j2
├── hosts
└── playbook.yml
```

## Test & Run
Okay, now test Your `playbook.yml` file using this command.
```bash
$ ansible-playbook --syntax-check playbook.yml
```
If You don't have any errors, run the playbook using this command.

```bash
$ ansible-playbook -i hosts playbook.yml
```

Wait until finish.

```bash
 ____________________________________________
< PLAY [Setup Docker on Ubuntu Server 22.04] >
 --------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

 ________________________
< TASK [Gathering Facts] >
 ------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

### Conclusion
In this post, I just show you how to install Docker in a specific version using Ansible Playbook when you have one or more servers.

Thank You for reading this post, If You have suggestions or questions please leave them below. Thanks

NB: In this case, I just set the user as root. I installed the Docker on `Ubuntu Server 22.04`. For full code follow this link [ansible-docker](https://github.com/danielcristho/ansible-stuff/tree/main/ansible-docker).