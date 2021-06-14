// import dynamic from "next/dynamic";
import Container from "../Container";
// const Jutsu = dynamic(() => import("react-jutsu").then(module => module.Jutsu), { ssr: false });

export default function Camera(): JSX.Element {
  return (
    <Container
      style={{
        position: "absolute",
        zIndex: 1,
        right: 10,
        top: 10,
        background: "transparent",
        // display: "flex",
        // flexDirection: "column",
        // gap: "10px",
      }}
    >
      <Container
        style={{
          height: "310px",
          width: "500px",
          borderRadius: "10px",
          backgroundColor: "black",
        }}
      >
        {/* <Jutsu
          roomName={"dadasd"}
          displayName={"asdad"}
          password={"asdasdasdsdas"}
          onMeetingEnd={() => console.log('Meeting has ended')}
          loadingComponent={<p>loading ...</p>}
          errorComponent={<p>Oops, something went wrong</p>}
          containerStyles={{
            width: "500px",
            height: "310px",
            borderRadius: "10px",
          }}
        /> */}
      </Container>
    </Container>
  );
}
