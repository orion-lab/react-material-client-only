import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import featherSocketIOClient from '@feathersjs/socketio-client';

const serverUrl = 'http://localhost:3030';

// Configure feather
const socket = io(serverUrl);
const app = feathers()
  .configure(featherSocketIOClient(socket))
  .hooks({
    error: {
      all: [
        (hook) => {
          console.log(hook.error.message, 'Error!');
          return hook;
        },
      ],
    },
  });

export default app;
