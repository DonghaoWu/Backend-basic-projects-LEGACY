### `This file is an introduction about how to install MongoDB and some basic terminal commands.`

### `Important commands`
- Run the db server
```bash
$ mongod
```
- Stop the db server(In server terminal)
`ctrl + c`

- Connect the db server in Mongo Shell way
```bash
$ mongo
```
- Stop the db server(In shell terminal)
```bash
> use admin
> db.shutdownServer()
```

### How to install MongoDB(on Mac)?

#### `Step1 :open your browser at`<br>https://www.mongodb.com/what-is-mongodb.<br>

<img src = './public/1.png' height = '300'><br>
<img src = './public/2.png' height = '300'>

#### `Step2 : Install in local`

- click on the download file, look like this.<br>

<img src = './public/3.png' height = '300'>

- open your terminal, type these commands(you can drag all the files to terminal)

```bash
sudo cp (all the files name in bin folder) /usr/local/bin
```

- Shouldlook like this,

<img src = './public/4.png' height = '300'>

- Check if this command works by this command

```bash
$ cd /usr/local/bin
```

#### `Step3 : Create DB server and run it`

```bash
$ cd /usr/local/bin
$ sudo mkdir -p /data/db
$ sudo chown -R `id -un` /data/db

//Run the database
$ mongod
```

`note:`

- After you run the database, you can find your database port, like this.

<img src = './public/5.png' height = '300'>

#### `Step4 : Connect to the server in Mongo Shell way.(you can also connect it in Compass App in UI way.)`

`Location: open another terminal`

```bash
$ mongo
```

- To check if it is working

```bash
$ db
```

- Get result like this:

<img src = './public/6.png' height = '300'>
