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
import ParentComp from "@common/components/ParentComp";
import RefsDemo from "@common/components/RefsDemo";
import FocusInput from "@common/components/FocusInput";
import FRParentInput from "@common/components/FRParentInput";
import PortalDemo from "@common/components/PortalDemo";
// import Spline from "@splinetool/react-spline";

export function Home() {
  return (
    <>
      {/* <div className="w-[24.375rem] h-40">
        <Spline scene="https://prod.spline.design/bJMWsSW3BjYwVySg/scene.splinecode" />
      </div> */}
      <PortalDemo />
      <h1 className="error">error</h1>
      <h1 className={Styles.success}>success</h1>
      <Message name="Iqbal" secondName="Hassan" />
      <FunctionClick />
      <BindEvent />
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <FRParentInput />
      <ParentComponent />
      <UserGreet />
      <NameList />
      <Stylesheet primary={true} />
      <Inline />
      <Form />
      <FragmentDemo />
      {/* <ParentComp /> */}
    </>
  );
}
