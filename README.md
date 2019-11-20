# Overview
Project for morkro/coding-challenge, contains 2 folders - front and back.

Tech used:

back: node + postgres

front: reactJs

Restrictions:

front and back designed to run on same host and front hardcoded to look at localhost:2222.

# Back
Setup postgres DB and update .env file using .env.example - fill correct PG credentials and host. But keep serverport to 2222 due to frontend now hardcoded to this port.

Then:
```
mckinsey> cd back
back> yarn
back> node migrate.js
```

And start backend api:
```
back> node main.js
```

# Front

```
mckinsey> cd front
front> yarn
front> yarn start
```

That's all.
