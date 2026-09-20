#!/bin/bash
tar -czf backup-$(date +%F).tar.gz /var/log
echo "Backup Done"