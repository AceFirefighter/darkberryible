# darkberryible
Setup Broadcastify streaming on a RaspberryPi running Darkice using Ansible

Tested on the Raspberry-pi B version 1 & 2 using Jessie-lite

# Credit
I compiled a lot of this from bits and pieces of other work. I will be adding thier credits here when I sort out my sources.

## Prerequisites

Prior to using this you will need a Raspberry-pi that is network accessable.
You will also need [ansible](http://docs.ansible.com/intro_installation.html) installed on your local machine or the Raspberry-pi for a localhost setup

#### Expand the root-fs

    ssh pi@10.60.50.145
    sudo raspi-config --expand-rootfs && reboot


#### Configure variables for broadcastify. 
Your going to need "mount" and "password" for your feed from broadcastify. Ignore the "/" character for mount.

    http://www.broadcastify.com/manage/feed/{{ Your Feed ID }}#ui-tabs-4
  
Place your feed variables into `scanner.yml`
 
    vi scanner.yml


    - hosts: scanner
      vars:
        mountpoint: f8h32pqhmd1a          # Remove the slash before placing the mountpoint here
        password: aqa2twt5 
        server: audio9.broadcastify.com   # This is pobably the same but check
        port: 80                          # Only change this is you have firewall problem

#### Add your Raspberry-pi to the hosts file

    vi hosts
    
    [scanner]
    10.60.50.145   # Change to the IP of your Raspberry-pi


## Usage

#### If you access your Raspberry-pi with a password
    ansible-playbook -i hosts scanner.yml --ask-pass
#### If you access your Raspberry-pi with a private key
    ansible-playbook --private-key {{ path to the private key }} -i hosts scanner.yml


# Running locally on the Raspberry-pi

    vi hosts
    
    [scanner]
    127.0.0.1

#### Running ansible to configure the Raspberry-pi
    ansible-playbook -i hosts -c local scanner.yml

# Trouble
This hasn't been refined into the most perfect solution so running it a second time can be problemmatic. If the setup fails be sure to remove the new darkice directories from `/root/` and from `/home/pi/` before making changes and running it a second time.

# Bugs
Submit issues here on github and if you make improvements I'd be happy to look over your pull requests.
