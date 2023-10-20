---
slug: 2023-10-21-provisioning-multipass-instance-using-cloud-init.md
title: Provisioning Multipass Instance Using Cloud Init
authors: danielcristho
tags: [ubuntu, linux]
enableComments: true
---

## Disclamer

In Multipass, the Minikube image is available with Ubuntu 22.04, Docker, and Kubectl included . So in the article, I will use the Ubuntu 20.04 (focal) image and set it up from basic with minimum requirements.

## Overview

I'm currently reading [Belajar Kubernetes Untuk Pemula](https://github.com/ngoprek-kubernetes/buku-kubernetes-pemula). There is a part where we asked to install Minikube to try Kubernetes locally. So in this reading I will show You how to set up a Minikube instance using [Multipass](https://multipass.run) and [Cloud-init](https://cloud-init.io) then try that.

Before we start, I will explain about `Multipass`, Multipass is a tool for creating Ubuntu VMs or instances. It’s designed for everyone who want a fresh Ubuntu environment with a single command, and it works on Linux, Windows and macOS. Multipass could also be your alternative.

<!--truncate-->

Then what is `Cloud-init`? `Cloud-init` is a service used for customizing Linux-based operating systems in the cloud. It allows you to customize virtual machines provided by a cloud vendor by modifying the generic OS configuration on boot. Canonical initially developed cloud-init for Ubuntu but expanded to most major Linux and FreeBSD operating systems. Today, it officially supports 8 Unix OSs - Ubuntu, Arch Linux, CentOS, Red Hat, FreeBSD, Fedora, Gentoo Linux, and openSUSE. In this case, We will use cloud-init to provision instance creation. The cloud-init service is used for a variety of things, including:

- Adding users and groups.
- Writing out arbitrary files.
- Adding YUM repositories.
- Running commands on first boot.

## Basic Setup

On Ubuntu or other Linux distributions Multipass is available in snap:

```bash
sudo snap install multipass
```

Check available images:

```bash
multipass find
```

```bash
Image                       Aliases           Version          Description
core                        core16            20200818         Ubuntu Core 16
core18                                        20211124         Ubuntu Core 18
core20                                        20230119         Ubuntu Core 20
core22                                        20230119         Ubuntu Core 22
20.04                       focal             20231011         Ubuntu 20.04 LTS
22.04                       jammy,lts         20231010         Ubuntu 22.04 LTS
23.04                       lunar             20231005         Ubuntu 23.04
appliance:adguard-home                        20200812         Ubuntu AdGuard Home Appliance
appliance:mosquitto                           20200812         Ubuntu Mosquitto Appliance
appliance:nextcloud                           20200812         Ubuntu Nextcloud Appliance
appliance:openhab                             20200812         Ubuntu openHAB Home Appliance
appliance:plexmediaserver                     20200812         Ubuntu Plex Media Server Appliance

Blueprint                   Aliases           Version          Description
anbox-cloud-appliance                         latest           Anbox Cloud Appliance
charm-dev                                     latest           A development and testing environment for charmers
docker                                        0.4              A Docker environment with Portainer and related tools
jellyfin                                      latest           Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media.
minikube                                      latest           minikube is local Kubernetes
ros-noetic                                    0.1              A development and testing environment for ROS Noetic.
ros2-humble                                   0.1              A development and testing environment for ROS 2 Humble.
```

You can also create an instance from those image, for example using Focal (Ubuntu 20.04):

```bash
multipass launch focal
```

Or define the CPU cores, memory, disk, and instance name:

```bash
multipass launch -c2 -m2G -d16G -n ubuntu20 focal
```

See instance info:

```bash
multipass info ubuntu20
```

```bash
Name:           ubuntu20
State:          Running
IPv4:           10.194.62.137
Release:        Ubuntu 20.04.6 LTS
Image hash:     bfa805bde8f2 (Ubuntu 20.04 LTS)
CPU(s):         2
Load:           1.68 0.61 0.22
Disk usage:     1.5GiB out of 15.4GiB
Memory usage:   155.6MiB out of 1.9GiB
Mounts:         --
```

Connect to running instance:

```bash
multipass shell ubuntu20
```

```bash
ubuntu@ubuntu20:~$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.6 LTS
Release:	20.04
Codename:	focal
```

Stop, delete and purge an instance:

```bash
multipass stop ubuntu20
```

```bash
multipass delete ubuntu20
```

```bash
$ multipass list

ubuntu20                Deleted           --               Not Available
```

```bash
multipass purge
```

## Minikube Setup

Create cloud-init file called `cloud-config.yaml`:

```bash
timezone: Asia/Jakarta
locale: id_ID.utf-8

repo_update: true
repo_upgrade: all

packages:
  - curl
  - apt-transport-https
  - ca-certificates
  - software-properties-common
  - gnupg
  - lsb-release

runcmd:
  # docker installation
  - curl -fsSL https://get.docker.com -o get-docker.sh
  - sudo sh get-docker.sh
  - sudo gpasswd -a ubuntu docker

  # minikube installation using deb
  - curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
  - sudo dpkg -i minikube_latest_amd64.deb
  - echo 'alias kubectl="minikube kubectl --"' >> /home/ubuntu/.bashrc
  - minikube start
```

### Explanation

- `timezone` - This configuration sets the system time zone to "Asia/Jakarta", which is the time zone for Jakarta, Indonesia.
- `locale` - This configuration sets the system locale to "id_ID.utf-8", which refers to the regional configuration for Indonesian.
- `repo_update: true` - Indicates that the package repository must be updated before installation of subsequent packages.
- `repo_upgrade: all` - Instructs to update all installed packages.
- `packages` - List of packages to be installed.
- `runcmd` - List of commands to be executed after package installation. In this case, these commands will be executed:

    - Download and run the Docker installation script.
    - Added user "ubuntu" to group "docker" to grant Docker access permissions.
    - Downloading and installing Minikube using the DEB package.
    - Added an alias for the kubectl command.
    - Getting started with Minikube.

Then create a BASH script to create an instance, called `run.sh` or You can also run by a single command below:

```bash
multipass launch -c2 -m2G -d16G -n kubelab --cloud-init cloud-config.yaml minikube
```

Your project should look like this:

```bash
.
├── cloud-config.yaml
└── run.sh
```

Now run the .sh file:

```bash
./run.sh
```

Get the info:

```bash
mulipass info kubelab

```

```bash
State:          Running
IPv4:           10.194.62.215
                172.17.0.1
                192.168.49.1
Release:        Ubuntu 20.04.6 LTS
Image hash:     bfa805bde8f2 (Ubuntu 20.04 LTS)
CPU(s):         2
Load:           0.12 0.49 0.61
Disk usage:     5.9GiB out of 15.4GiB
Memory usage:   223.5MiB out of 1.9GiB
Mounts:         --

```

Connect to a running instance

```bash
multipass shell kubelab
```

Check minikube version:

```bash
minikube version
```

```bash
minikube version: v1.31.2
commit: fd7ecd9c4599bef9f04c0986c4a0187f98a4396e
```

Start minikube:

```bash
minikube start
```

```bash
😄  minikube v1.31.2 on Ubuntu 20.04 (kvm/amd64)
✨  Automatically selected the docker driver. Other choices: ssh, none

🧯  The requested memory allocation of 1965MiB does not leave room for system overhead (total system memory: 1965MiB). You may face stability issues.
💡  Suggestion: Start minikube with less memory allocated: 'minikube start --memory=1965mb'

📌  Using Docker driver with root privileges
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
💾  Downloading Kubernetes v1.27.4 preload ...
    > preloaded-images-k8s-v18-v1...:  393.21 MiB / 393.21 MiB  100.00% 973.68
    > gcr.io/k8s-minikube/kicbase...:  447.58 MiB / 447.62 MiB  99.99% 973.91 K
🔥  Creating docker container (CPUs=2, Memory=1965MB) ...
🐳  Preparing Kubernetes v1.27.4 on Docker 24.0.4 ...
    ▪ Generating certificates and keys ...
    ▪ Booting up control plane ...
    ▪ Configuring RBAC rules ...
🔗  Configuring bridge CNI (Container Networking Interface) ...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner, default-storageclass
💡  kubectl not found. If you need it, try: 'minikube kubectl -- get pods -A'
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

Minikube stop

```bash
minikube stop
```

```bash
✋  Stopping node "minikube"  ...
🛑  Powering off "minikube" via SSH ...
🛑  1 node stopped.
```

### Conclusion

We've just created a locally run Minikube instance that uses Cloud-init to provision it, after reading the book later I think I'll add another read maybe by using a cloud provider. Thank you.😊
