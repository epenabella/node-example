import { createTunnel } from "tunnel-ssh";
import net from 'net';

   export const portIsForwarding = (port: number): Promise<boolean> => {
     return new Promise((resolve) => {
       const tester = net
         .createServer()
         .once('error', (err) => {
           console.log(JSON.stringify(err));
   
   
           if (err.message.includes('EADDRINUSE')) {
             console.log('Port in use');
             resolve(true);
           } else {
             console.log('Error occurred:', err);
             resolve(false);
           }
         })
         .once('listening', async () => {
           console.log('Port open');
           await tester.once('close', () => resolve(false)).close();
         })
         .listen(port);
     });
   };

export async function createSSHTunnel(localAddr = "127.0.0.1", localPort = 3307) {
  const tunnelOptions = {
    autoClose: false,
  };
  const serverOptions = {
    port: localPort,
  };
  const sshOptions = {
    host: '144.126.145.11',
    port: 22,
    username: import.meta.env.VITE_SSH_USERNAME,
    password: import.meta.env.VITE_SSH_PASSWORD,
  };
  const forwardOptions = {
    srcAddr: localAddr,
    srcPort: localPort,
    dstAddr: localAddr,
    dstPort: 5432,
  };
  try {
    await createTunnel(
      tunnelOptions,
      serverOptions,
      sshOptions,
      forwardOptions
    );
  } catch (error:any) {
    if (error.code === "EADDRINUSE") {
      // Assume port is uniquely used by SSH tunnel, so existing connection can be reused
      console.log(`Returning existing SSH tunnel on ${localAddr}:${localPort}.`);
      return { srcAddr: localAddr, srcPort: localPort };
    } else {
      throw error;
    }
  }
  console.log(`SSH tunnel successfully created on ${localAddr}:${localPort}.`);
  return { srcAddr: localAddr, srcPort: localPort };
}