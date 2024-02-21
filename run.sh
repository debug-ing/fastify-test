APP_NAME="backend"

# Check if the application is already running
pm2 list | grep -q $APP_NAME

if [ $? -eq 0 ]; then
    # The application is running, so reload it
    echo "Application $APP_NAME is running, reloading..."
    pm2 reload $APP_NAME
else
    # The application is not running, start it
    echo "Application $APP_NAME is not running, starting..."
    pm2 start dist/main.js --name="$APP_NAME"
fi