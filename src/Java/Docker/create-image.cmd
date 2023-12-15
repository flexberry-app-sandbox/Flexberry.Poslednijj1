docker build --no-cache -f SQL\Dockerfile.PostgreSql -t poslednijj-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t poslednijj-java/app ../../..
