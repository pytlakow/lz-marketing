---
title: "How to Send TLS Encrypted Logs Using Syslog-ng: A Comprehensive Guide"
slug: "configuring-tls-tunnels-in-syslog-ng"
author: "tomd"
category: "training"
meta_description: "Follow our step-by-step guide on setting up TLS encryption for log management with syslog-ng and LogZilla, and keep your sensitive log data secure."
meta_title: "Secure Your Log Management with TLS Encryption | Syslog-ng"
reading_time: "3"
keywords: "TLS encryption, syslog-ng, LogZilla, log management, secure logs, encrypted logs, X.509 certificates, network security, log data protection"
tags: "netops; tls; security; syslog; syslog-ng"
created_date: "2021-12-10"
updated_date: "2023-04-05"
published_date: "2023-04-05"
background_image: "images/background_960x540.webp"
banner_image: "images/banner_1600x499.png"
half_width_image: "images/half_width_700x540.webp"
thumbnail_image: "images/thumbnail_300x300.webp"
opengraph_image: "images/opengraph_1200x630.jpg"
---

### LogZilla Server SSL Key Creation

You will be prompted for a passphrase during this process, but it will only be used to create the keys. Once the keys are created, the passphrase will be removed. You will also be asked questions about the server's name, location, and contact information.

‍

\_\_MARKDOWN\_BLOCK\_0\_\_‍

### Configure *syslog-ng*

\_\_MARKDOWN\_BLOCK\_1\_\_‍

### Add the key files to client systems

‍

\_\_MARKDOWN\_BLOCK\_2\_\_‍

### Configure syslog-ng on the client

‍

\_\_MARKDOWN\_BLOCK\_3\_\_‍

Check your LogZilla server to verify that events are now being received from this Client.

If you encounter any issues, refer to the [Debugging Event Reception](file:///help/receiving_data/debugging_event_reception) section of this guide.

### Advanced server configuration

‍

\_\_MARKDOWN\_BLOCK\_4\_\_‍

‍