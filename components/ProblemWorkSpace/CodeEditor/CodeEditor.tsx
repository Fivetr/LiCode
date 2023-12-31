"use client";

import React from "react";
import CodeEditorNav from "./CodeEditorNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import CodeEditorConsoleContainer from "./CodeEditorConsoleContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Problem } from "@/types";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebase_auth } from "@/firebase/firebase";

type CodeEditorProps = {
  problem: Problem;
};

function CodeEditor({ problem }: CodeEditorProps) {
  const ConsoleOpen = useSelector(
    (state: RootState) => state.ConsoleReduce.value
  );
  const [user] = useAuthState(firebase_auth);

  const [Success, setSuccess] = useState(false);
  let [userCode, setuserCode] = useState<string>(problem.starterCode);

  const handleOnChange = (value: string) => {
    setuserCode(value);
    localStorage.setItem(`code-${problem.id}`, JSON.stringify(value));
  };

  useEffect(() => {
    const code = localStorage.getItem(`code-${problem.id}`);
    if (user) {
      setuserCode(code ? JSON.parse(code) : problem.starterCode);
    } else {
      setuserCode(problem.starterCode);
    }
  }, [problem.id, user, problem.starterCode]);

  return (
    // right side of workspace; container
    <div className="relative flex flex-col rounded-b-lg bg-[#eaeaea]">
      {/* top */}
      <CodeEditorNav />
      {/*mid-bottom*/}
      <div className="flex h-[calc(100vh-94px)] w-full">
        <div className="flex w-full flex-col rounded-b-[5px]">
          {/* check is the console is open*/}
          {ConsoleOpen ? (
            // split the workspace horizontally with codeMirror & (test cases & concole footer)
            <Split
              className="h-[calc(100vh-94px)]"
              direction="vertical"
              sizes={[78, 22]}
              minSize={60}
            >
              <div className="w-full overflow-x-hidden rounded-b-[5px]  bg-white">
                <CodeMirror
                  value={userCode}
                  theme={githubLight}
                  extensions={[javascript()]}
                  style={{ fontSize: 14 }}
                  onChange={handleOnChange}
                />
              </div>
              <CodeEditorConsoleContainer
                examples={problem.examples}
                setSuccess={setSuccess}
                userCode={userCode}
                id={problem.id}
                startFunction={problem.starterFunctionName}
                extraParams={problem.extraParams}
              />
            </Split>
          ) : (
            // stack the work space with codeMirror & console footer
            <div className="relative flex h-[calc(100vh-94px)] flex-col justify-between">
              <div className="h-[calc(98.5%-30px)] w-full overflow-x-hidden rounded-b-[5px] bg-white">
                <CodeMirror
                  value={userCode}
                  theme={githubLight}
                  extensions={[javascript()]}
                  style={{ fontSize: 14 }}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2">
                <CodeEditorConsoleContainer
                  setSuccess={setSuccess}
                  userCode={userCode}
                  id={problem.id}
                  startFunction={problem.starterFunctionName}
                  extraParams={problem.extraParams}
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-[.4rem] bg-[#eaeaea]"></div>
      </div>
    </div>
  );
}

export default CodeEditor;
