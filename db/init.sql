-- CREATE DATABASE IF NOT EXISTS sport_trait
SELECT 'CREATE DATABASE sport_trait_dev'
WHERE NOT EXISTS(SELECT FROM pg_database WHERE datname='sport_trait_dev')\gexec