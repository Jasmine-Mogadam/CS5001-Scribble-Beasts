<script lang="ts">
  class App {
    #ws: WebSocket;

    constructor() {
      this.#ws = new WebSocket(`ws://${window.location.host}/api`);

      this.#ws.onerror = (event) => {
        console.error("WebSocket error:", event);
      };

      this.#ws.onopen = () => {
        console.log("WebSocket connection established");
      };

      this.#ws.onmessage = (event: MessageEvent<string>) => {
        alert(event.data);
      };
    }

    sendMessage(msg: string): void {
      if (this.#ws.readyState === WebSocket.OPEN) {
        this.#ws.send(msg);
      } else {
        console.error(
          "WebSocket is not open. Ready state:",
          this.#ws.readyState
        );
      }
    }

    $destroy() {
      this.#ws.close();
    }
  }

  const app = new App();

  // Bind to button click
  function handleClick(): void {
    app.sendMessage("ping");
  }
</script>

<main>
  <h1>Hello World!</h1>
  <br />
  <button on:click={handleClick}>Ping</button>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
  }

  h1 {
    color: #333;
    font-size: 2.5rem;
  }
</style>
