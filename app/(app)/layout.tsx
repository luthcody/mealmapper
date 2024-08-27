"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { socket } from "@/components/utils/socket";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] : [string, Function] = useState('');

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: any) {
      setFooEvents(value);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return (
    <div>
      <div className="text-black">CONNECTED: {isConnected ? 'YES' : 'NO'}</div>
      <div className="text-black">EVENT DATA: {JSON.stringify(fooEvents)}</div>

      <button className="text-black" onClick={() => socket.emit('message', { timestamp: new Date().toISOString() })}>SEND MESSAGE</button>

      <SignedIn>
        <Header />
        {children}
        <Footer />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/dashboard" />
      </SignedOut>
    </div>
  );
}
