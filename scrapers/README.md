## Docker

#### Build using docker compose

Build all:

`docker-compose build`

Build single:

`docker-compose build reserve-america`

Push:

`docker-compose push`

`docker-compose push reserve-america`

#### Image repo / AWS ECR

AWS ECR logins expire after 12 hrs.

To get a new session locally:

`$(aws ecr get-login --no-include-email --region us-east-1)`

AWS cli is not install on production servers. Run this locally and paste results in a shell of a server that requires docker pull from ECR.

`aws ecr get-login --no-include-email`

#### Deploying

./deploy.sh recreation-gov 104.248.117.218
./deploy.sh reserve-america 104.248.117.218
./deploy.sh reserve-ca 104.248.117.218


104.248.117.232
161.35.96.242
104.248.117.17
104.248.117.156
104.248.117.218


#### All together now

docker-compose build camis && docker-compose push camis && ./deploy.sh camis 167.99.153.28

docker-compose build reserve-ca && docker-compose push reserve-ca && ./deploy.sh reserve-ca 165.22.157.78

docker-compose build reserve-america && docker-compose push reserve-america && ./deploy.sh reserve-america 167.99.153.28

docker-compose build recreation-gov && docker-compose push recreation-gov && ./deploy.sh recreation-gov 167.99.153.28

docker-compose build pinellas-county && docker-compose push pinellas-county && ./deploy.sh pinellas-county 167.99.153.28



---

## TODO

- ESlint not per scraper
- Cleanup ReserveCA linter issues (parse)
- Tests
- Bulk of redis loop in Queue to shared
- Better error handling
  - sentry.io or ?
