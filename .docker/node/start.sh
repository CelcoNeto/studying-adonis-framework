#!/bin/sh

ls

echo 'Start the application and jobs'

echo '=============================='

adonis kue:listen
npm run start
