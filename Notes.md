# Simple Node with Express + PostgreSQL Server
## Features

# Start server
1- Start postrgres server -> /home/linuxbrew/.linuxbrew/Cellar/postgresql/12.4/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start 
# End server
2- Start postrgres server -> /home/linuxbrew/.linuxbrew/Cellar/postgresql/12.4/bin/pg_ctl -D /usr/local/pgsql/data -l logfile stop 
to end server 
3- pg_ctl -D /home/linuxbrew/.linuxbrew/var/postgres start 
3-a) sudo service postgresql start 

# Refresh server
3-b) sudo /etc/init.d/postgresql restart




await User.findOne()