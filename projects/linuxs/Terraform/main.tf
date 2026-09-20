provider "aws" { region = "us-east-1" }
resource "aws_s3_bucket" "portfolio" { bucket = "devops-all-in-one-bucket" }