CS5001: Senior Design Project

# Team Scribble Beasts

## Members

[Jasmine Mogadam](documents/biographies/jasmine-mogadam-bio.md) - Computer Science Major ( mogadajh@mail.uc.edu )

[Ana Cedillo](documents/biographies/ana-cedillo-bio.md) - Computer Science Major ( cedillak@mail.uc.edu )

## Topic Area

Scribble beasts is a web game that has players collaboratively create beasts out of scribbles to save the world.

### Game Loop

1. Host player creates a room
2. Other players join this room
3. Host player starts game when everyone is in
4. Each player scribbles, lines, colors, and names in rounds. Between each round the images players last worked on are given to a new player. This way everyone participates in making each beast.
5. A random apocalypse card is drawn, explaining how the world is about to end
6. Each player must argue why their beast would solve this problem
7. Players vote for the best beast
8. The game ends, announcing the winners, and the host can replay it.

### Implementation

Since these games will have a ton of events firing asynchronously, the server and client will use websockets to easily identify which player is doing what and how to handle it while in rooms. Even before they are in a room, the server can field user requests to join and create rooms via websockets. Once a player joins a room, their websocket can be put inside it on the server-side.

### Tools

#### Frontend

- Svelte
- Flowbite
- Canvas API
- Typescript

#### Backend

- Node.js
- ws
- Typescript

#### Routing

- Ngnix
- Docker
- Release Share

## Development Setup

### Prerequisites

#### Required VS Code Extensions

For the best development experience, install the following VS Code extensions:

1. **ESLint** (`dbaeumer.vscode-eslint`)

   - Provides real-time linting and error checking
   - Ensures code quality and consistency

2. **Prettier** (`esbenp.prettier-vscode`)

   - Formats code on save
   - Maintains consistent code style across the project

3. **Svelte for VS Code** (`svelte.svelte-vscode`)

   - Provides syntax highlighting and IntelliSense for Svelte
   - Includes TypeScript support for Svelte files

4. **Docker** (`ms-azuretools.vscode-docker`)
   - Provides Docker commands and container management
   - Syntax highlighting for Docker files

To configure automatic formatting on save, add this to your VS Code settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  }
}
```

#### Install Docker

1. Download and install Docker Desktop from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Start Docker Desktop
3. Verify installation by running:
   ```bash
   docker --version
   ```

#### Install Node.js and npm

1. Download and install Node.js from [https://nodejs.org/](https://nodejs.org/) (This will also install npm)
2. Verify installation by running:
   ```bash
   node --version
   npm --version
   ```

### Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Jasmine-Mogadam/CS5001-Scribble-Beasts.git
   cd CS5001-Scribble-Beasts
   ```

2. Install all dependencies (client and server):

   ```bash
   npm install
   ```

   This will install dependencies for both the client and server automatically using the workspace configuration.

### Configuration

#### Port Configuration

Duplicate `.env.sample` as `.env` and modify the ports to your heart's content.

### Running the Project

1. Start all services using Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. Access the application:
   (if you've changed the port nginx runs on, you'll need to append the port number to localhost)

   - Frontend: http://localhost
   - Backend API: http://localhost/api

3. To stop the services:
   ```bash
   docker-compose down
   ```

### Development

- The client and server directories are mounted as volumes, so changes will be reflected immediately without rebuilding the containers
- Use `docker-compose up --build` when you modify the Dockerfile or add new dependencies
- Check container logs using `docker-compose logs -f [service_name]`
