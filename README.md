# mckinsey
Project for morkro/coding-challenge, contains 2 folders - front and back.

Tech used:

back: node + postgres

front: reactJs

Restrictions:

front and back designed to run on same host and front hardcoded to look at localhot:2222.

# Back
Setup postgres DB and update .env file using .env.example - fill correct PG credentials and host. But keep serverport to 2222 due to front end now hardcoded to this port.

Then:
```
$ cd back
$ yarn
$ node migrate.js
```

And start backend api:
```
$ node main.js
```

# Front

```
$ cd back
$ yarn
$ yarn start
```

That's all.
