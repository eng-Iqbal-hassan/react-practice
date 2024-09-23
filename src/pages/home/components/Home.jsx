import BindEvent from "@common/components/BindEvent";
import FunctionClick from "@common/components/FunctionClick";
import Message from "@common/components/Message";
import NameList from "@common/components/NameList";
import ParentComponent from "@common/components/ParentComponent";
import UserGreet from "@common/components/UserGreet";
// import Spline from "@splinetool/react-spline";

export function Home() {
  return (
    <>
      {/* <div className="w-[24.375rem] h-40">
        <Spline scene="https://prod.spline.design/bJMWsSW3BjYwVySg/scene.splinecode" />
      </div> */}
      <Message name="Iqbal" secondName="Hassan" />
      <FunctionClick />
      <BindEvent />
      <ParentComponent />
      <UserGreet />
      <NameList />
    </>
  );
}
