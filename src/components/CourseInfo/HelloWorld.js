import React from "react";

import {
  Title,
  Code,
  Header,
  Text,
  CodeSpan,
  Outline,
  Header6,
  List,
} from "./Chapters";

const htmlCodeOne = () => {
  return `<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>`;
};

const htmlCodeTwo = () => {
  return `<script type="text/javascript"><!--
    ...
//--></script>`;
};

const htmlCodeThree = () => {
  return `<script src="/path/to/script.js"></script>`;
};

const htmlCodeFour = () => {
  return `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`;
};

const htmlCodeFive = () => {
  return `<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…`;
};

const htmlCodeSix = () => {
  return `<script src="file.js">
    alert(1); // the content is ignored, because src is set
  </script>;`;
};

const htmlCodeSeven = () => {
  return `<script src="file.js"></script>
<script>
  alert(1);
</script>`;
};

const HelloWorld = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Text>
        This part of the tutorial is about core JavaScript, the language itself.
      </Text>
      <Text>
        But we need a working environment to run our scripts and, since this
        book is online, the browser is a good choice. We’ll keep the amount of
        browser-specific commands (like <CodeSpan>alert</CodeSpan>) to a minimum
        so that you don’t spend time on them if you plan to concentrate on
        another environment (like Node.js). We’ll focus on JavaScript in the
        browser in the next part of the tutorial.
      </Text>
      <Text>
        So first, let’s see how we attach a script to a webpage. For server-side
        environments (like Node.js), you can execute the script with a command
        like <CodeSpan>"node my.js"</CodeSpan>.
      </Text>
      <Header>The “script” tag</Header>
      <Text>
        JavaScript programs can be inserted almost anywhere into an HTML
        document using the <CodeSpan>{"<script>"}</CodeSpan> tag.
      </Text>
      <Text>For instance:</Text>
      <Code>{htmlCodeOne()}</Code>
      <Text>
        The <CodeSpan>{"<script>"}</CodeSpan> tag contains JavaScript code which
        is automatically executed when the browser processes the tag.
      </Text>
      <Header>Modern markup</Header>
      <Text>
        The <CodeSpan>{"<script>"}</CodeSpan> tag has a few attributes that are
        rarely used nowadays but can still be found in old code:
      </Text>
      <Text>
        <b>The</b> <CodeSpan>type</CodeSpan> <b>attribute:</b>{" "}
        <CodeSpan>{"<script type=…>"}</CodeSpan>
      </Text>
      <Text>
        The old HTML standard, HTML4, required a script to have a{" "}
        <CodeSpan>type</CodeSpan>. Usually it was{" "}
        <CodeSpan>type="text/javascript"</CodeSpan>. It’s not required anymore.
        Also, the modern HTML standard totally changed the meaning of this
        attribute. Now, it can be used for JavaScript modules. But that’s an
        advanced topic, we’ll talk about modules in another part of the
        tutorial.
      </Text>
      <Text>
        <b>The</b> <CodeSpan>language</CodeSpan> <b>attribute:</b>{" "}
        <CodeSpan>{"<script language=…>"}</CodeSpan>
      </Text>
      <Text>
        This attribute was meant to show the language of the script. This
        attribute no longer makes sense because JavaScript is the default
        language. There is no need to use it.
      </Text>
      <Text>
        <b>Comments before and after scripts.</b>
      </Text>
      <Text>
        In really ancient books and guides, you may find comments inside{" "}
        <CodeSpan>{"<script>"}</CodeSpan> tags, like this:
      </Text>
      <Code>{htmlCodeTwo()}</Code>
      <Text>
        This trick isn’t used in modern JavaScript. These comments hide
        JavaScript code from old browsers that didn’t know how to process the{" "}
        <CodeSpan>{"<script>"}</CodeSpan> tag. Since browsers released in the
        last 15 years don’t have this issue, this kind of comment can help you
        identify really old code.
      </Text>
      <Header>External scripts</Header>
      <Text>
        If we have a lot of JavaScript code, we can put it into a separate file.
      </Text>
      <Text>
        Script files are attached to HTML with the <CodeSpan>src</CodeSpan>{" "}
        attribute:
      </Text>
      <Code>{htmlCodeThree()}</Code>
      <Text>
        Here, <CodeSpan>/path/to/script.js</CodeSpan> is an absolute path to the
        script from the site root. One can also provide a relative path from the
        current page. For instance, <CodeSpan>src="script.js"</CodeSpan>, just
        like <CodeSpan>src="./script.js"</CodeSpan>, would mean a file
        <CodeSpan>"script.js"</CodeSpan> in the current folder.
      </Text>
      <Text>We can give a full URL as well. For instance:</Text>
      <Code>{htmlCodeFour()}</Code>
      <Text>To attach several scripts, use multiple tags:</Text>
      <Code>{htmlCodeFive()}</Code>
      <Outline>
        <Header6 info>Please note:</Header6>
        <Text>
          As a rule, only the simplest scripts are put into HTML. More complex
          ones reside in separate files.
        </Text>
        <Text>
          The benefit of a separate file is that the browser will download it
          and store it in its cache.
        </Text>
        <Text>
          Other pages that reference the same script will take it from the cache
          instead of downloading it, so the file is actually downloaded only
          once.
        </Text>
        <Text>That reduces traffic and makes pages faster.</Text>
      </Outline>
      <Outline>
        <Header6 aware>
          If <CodeSpan>src</CodeSpan> is set, the script content is ignored.
        </Header6>
        <Text>
          A single <CodeSpan>{"<script>"}</CodeSpan> tag can’t have both the{" "}
          <CodeSpan>src</CodeSpan>
          attribute and code inside.
        </Text>
        <Text>This won’t work:</Text>
        <Code>{htmlCodeSix()}</Code>
        <Text>
          We must choose either an external{" "}
          <CodeSpan>{'<script src="…">'}</CodeSpan> or a regular{" "}
          <CodeSpan>{"<script>"}</CodeSpan> with code.
        </Text>
        <Text>The example above can be split into two scripts to work:</Text>
        <Code>{htmlCodeSeven()}</Code>
      </Outline>
      <Header>Summary</Header>
      <List>
        <li>
          <Text>
            We can use a <CodeSpan>{"<script>"}</CodeSpan> tag to add JavaScript
            code to a page.
          </Text>
        </li>
        <li>
          <Text>
            The <CodeSpan>type</CodeSpan> and <CodeSpan>language</CodeSpan>{" "}
            attributes are not required.
          </Text>
        </li>
        <li>
          <Text>
            A script in an external file can be inserted with{" "}
            <CodeSpan>{'<script src="path/to/script.js"></script>.'}</CodeSpan>
          </Text>
        </li>
      </List>
      <Text>
        There is much more to learn about browser scripts and their interaction
        with the webpage. But let’s keep in mind that this part of the tutorial
        is devoted to the JavaScript language, so we shouldn’t distract
        ourselves with browser-specific implementations of it. We’ll be using
        the browser as a way to run JavaScript, which is very convenient for
        online reading, but only one of many.
      </Text>
    </>
  );
};

export default HelloWorld;
