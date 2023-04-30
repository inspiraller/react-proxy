import { loadState } from "@/store/persist";
import { RootState } from "@/store/useCount";
import * as React from "react";
import { ComponentType } from "react";

// const withStore = <P extends object>(Component: React.ComponentType<P>):  React.ComponentType<P extends {preloadedStore: RootState}> => {

//   const wrappedComponent = (props: {preloadedStore: RootState}) => (
//     <Component {...props} />
//   );

//   return wrappedComponent;
// };

// const withStore = <P extends { preloadedStore?: RootState }>(
//   Component: React.ComponentType<P>
// ) => {
//   const wrappedComponent = (props: { preloadedStore: RootState }) => (
//     <Component {...props} />
//   );

//   return wrappedComponent;
// };


interface PropsOutput {
  preloadedStore: RootState;
}

const withStore = <P extends {}>(Component: ComponentType<P>):  ComponentType<P | PropsOutput> => {
  const wrappedComponent = (props: P) => (
    <Component {...props} />
  );
  // CANT DO
  // wrappedComponent.getStaticProps = async () => {
  //   const preloadedStore: RootState = loadState();
  
  //   console.log("withStore... wrappedComponent.getStaticProps()", { preloadedStore });
  //   return {
  //     props: {
  //       preloadedStore,
  //     },
  //   };
  // }


  return wrappedComponent as ComponentType<P | PropsOutput>;
};


// Will need to import this and export with each page...
export const getStaticProps = async () => {
  await setTimeout(() => {}, 0);
  const preloadedStore: RootState = loadState();

  console.log("withStore... getInitialProps()", { preloadedStore });
  return {
    props: {
      preloadedStore,
    },
  };
}

export default withStore;
