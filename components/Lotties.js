import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LottiesResumen = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets5.lottiefiles.com/packages/lf20_w5qGd2uvKm.json"
      style={{ height: "400px", width: "400px" }}
    >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
  );
};
const LottiesTotal = () => {
    return (
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_8btahzqu.json"
        style={{ height: "400px", width: "400px" }}
      >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
  };
  const LottiesPendiente = () => {
    return (
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/private_files/lf30_t8nkvzcj.json"
        style={{ height: "400px", width: "400px" }}
      >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
  };
  const LottiesCompletado = () => {
    return (
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_iYA1JNzh6r.json"
        style={{ height: "400px", width: "400px" }}
      >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
  };
export {
    LottiesResumen,
    LottiesTotal,
    LottiesPendiente,
    LottiesCompletado
} 
