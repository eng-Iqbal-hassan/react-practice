import BindEvent from "@common/components/BindEvent";
import FunctionClick from "@common/components/FunctionClick";
import Inline from "@common/components/Inline";
import Message from "@common/components/Message";
import NameList from "@common/components/NameList";
import ParentComponent from "@common/components/ParentComponent";
import Stylesheet from "@common/components/Stylesheet";
import UserGreet from "@common/components/UserGreet";
import "../../../../src/AppStyles.css";
import Styles from "../../../../src/AppStyles.module.css";
import Form from "@common/components/Form";
import FragmentDemo from "@common/components/FragmentDemo";
// import Spline from "@splinetool/react-spline";

export function Home() {
  return (
    <>
      {/* <div className="w-[24.375rem] h-40">
        <Spline scene="https://prod.spline.design/bJMWsSW3BjYwVySg/scene.splinecode" />
      </div> */}
      <h1 className="error">error</h1>
      <h1 className={Styles.success}>success</h1>
      <Message name="Iqbal" secondName="Hassan" />
      <FunctionClick />
      <BindEvent />
      <ParentComponent />
      <UserGreet />
      <NameList />
      <Stylesheet primary={true} />
      <Inline />
      <Form />
      <FragmentDemo />
    </>
  );
}
