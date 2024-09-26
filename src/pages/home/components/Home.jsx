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
import Hero from "@common/components/Hero";
import ErrorBoundary from "@common/components/ErrorBoundary";
import ClickCounter from "@common/components/ClickCounter";
import HoverCounter from "@common/components/HoverCounter";
import ClickCounterTwo from "@common/components/ClickCounterTwo";
import HoverCounterTwo from "@common/components/hoverCounterTwo";
import User from "@common/components/User";
import Counter from "@common/components/Counter";
import ComponentC from "@common/components/ComponentC";
import { UserProvider } from "@common/components/UserContext";

// import Spline from "@splinetool/react-spline";

export function Home() {
  return (
    <>
      {/* <div className="w-[24.375rem] h-40">
        <Spline scene="https://prod.spline.design/bJMWsSW3BjYwVySg/scene.splinecode" />
      </div> */}
      <PortalDemo />
      <ClickCounter name="iqbal" />
      <HoverCounter />
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <User name="Iqbal" /> */}
      {/* <User name={() => "Iqbal"} /> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? "Iqbal" : "Guest")} /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Iqbal" : "Guest")} /> */}
      {/* value of a prop can be a function to control what is actually render in a
      component */}
      {/* this is a base of render prop  */}
      {/* render prop is a technique to share the common function between the
      components using prop whose value is a function */}
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
      <Hero heroName="batman" />
      <Hero heroName="superman" />
      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary>
      <UserProvider value="Iqbal">
        <ComponentC />
      </UserProvider>
    </>
  );
}
