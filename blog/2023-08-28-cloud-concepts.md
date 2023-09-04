---
title: AWS Cloud Practicioner Journey (Day 1)
slug: aws-cloud-practicioner-journey-day-1
enableComments: true
authors: danielcristho
tags: [study, aws, cloud]
---

These are my few notes while learning about AWS cloud practitioner, I hope they can help you a little. Thank You.

<!--truncate-->

## Cloud Concepts

**- Whats is cloud computing?**
	Cloud computing is the practices of using a network of remote server hosted on the internet to store, manage and process data.

**- On-premises vs Cloud Providers**
1. On-premises
    - You own the server
    - You hire IT people
    - You pay or rent the real-estate (Service)
    - You take all the risk
2. Cloud Providers
    - Someone else owns the server
    - Someone else hires the people
    - Someone else pays or rents the real-estate (Service)
    - You responsible to manage the server, someone else takes care the rest

**- Evolution of hosting**
Dedicated Server
One physical machine dedicated to single a business.
- run single web/site
- very expansive, high maintenance, high security
    VPS (Virtual Private Server)
    The physical machines is virtualized into sub-machine.
    - run multiple app/site
    - better utilization and isolation of resources
    Shared Hosting
    One physical machines shared by hundred of business.
    - very cheap, poor isolation, limited functionality
    -
    Cloud Hosting
    Multiple physical machines that act as one system.
    - the system is abstracted into multiple cloud services
    - flexible, scalable, secure, cost-effective, high-configurabilty

- What is Amazon?
	An American multinational computer technology corporation headquartered in Seattle, Washington

- What is AWS?
	Cloud services provider from Amazon, was launched in 2006. Their first services:
	- Simple Queue Service (SQS) -> 2004
	- Simple Storage Service (S3) -> April 2006
	- Elastics Cloud Compute (EC2) -> August 2006

- What is Cloud Service Provider (CSP) ?
	is a company which provides multiple **Cloud Services**, ​and those Cloud Services can be chained together to create cloud architectures​
  Most commonly through internet-hosted computing, storage, and software services.

  ## Common Cloud Services

- **Compute​** - Imagine having a virtual computer that​ can run applications, programs, and code. -> EC2
- **Networking​** - Imagine having a virtual network that allows you to define internet connections or network isolations -> VPC
- **Storage​**- Imagine having a virtual hard-drive that​ can store files -> EBS
- **Databases​** - Imagine a virtual database for storing and reporting data or a database for general-purpose web-application -> RDS

**Tier of CSP**

Tier 1 (Early to market, wide offering, strong synergies between services, well recognized in the industry) -> AWS, AZURE, GCP, Alibaba Cloud

Tier 2 ( Backed by well-known tech companies, slow to innovate and turned to specialization.)-> IBM Cloud, Oracle Cloud

Tier 3 ( Virtual Private Servers (VPS) turned to offer core IaaS offering. Simple, cost-effective) -> Linode, Vultr, Digital Ocean

**Evolution of cloud computing**

Dedicated -> VMS -> Container -> Functions