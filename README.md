# DevOps Performance Engineering Labs

### Understand how DevOps can blend with the Performance Engineering aspects.

#### Introducing Continuous Performance Engineering
1. Automate Performance Testing.
2. Integrate Performance Analytics, Monitoring & Reporting aspects. 
3. Enable Shift-Left to detect performance, scalability and architectural anamolies early on in development phase.
4. ...

## SETTING UP INFRASTRUCTURE FOR DEVOPS CI/CD Pipeline

1. Provision Build Server [ Azure Linux VM - Ubuntu 14.04.4 LTS ]
    - Azure quickstart template (https://github.com/Azure/azure-quickstart-templates/tree/master/docker-simple-on-ubuntu) allows to auto deploy Ubuntu VM with Docker (using Docker Extension) installed.

2. Work-around for setting up the Network Security Group for newer Azure VMs 
    - Azure VMs does not create Network Security Groups resource while the Non-Classic VM is provisioned.
    - Network Security Groups resource help setup the Inbound security rules for defining the endpoints for accesing application through specific ports.
    - TODO: capture the AZURE CLI commands to achieve this.     

