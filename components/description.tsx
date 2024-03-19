import Link from "next/link";

function parseToMarkdownAST(text: string) {
  let buffer = "";
  let ref = "";
  let output = [];
  let i = 0;
  let state = "normal";
  while (i < text.length) {
    if (state == "normal") {
      if (text[i] == "[") {
        state = "link_head";
        output.push({ type: "p", text: buffer });
        buffer = "";
        i += 1;
        continue;
      }

      if (text[i] == "`" && text[i + 1] == "`") {
        state = "math";
        output.push({ type: "p", text: buffer });
        buffer = "";
        i += 2;
        continue;
      }
      if (text[i] == "`") {
        state = "chem";
        output.push({ type: "p", text: buffer });
        buffer = "";
        i += 1;
        continue;
      }
      if (text[i] == "*" && text[i + 1] == "*") {
        state = "bold";
        output.push({ type: "p", text: buffer });
        buffer = "";
        i += 2;
        continue;
      }
      if (text[i] == "*") {
        state = "italic";
        output.push({ type: "p", text: buffer });
        buffer = "";
        i += 1;
        continue;
      }

      buffer += text[i];
      i++;
      continue;
    }

    if (state == "math") {
      if (text[i] == "`" && text[i + 1] == "`") {
        state = "normal";
        output.push({ type: "math", text: buffer });
        buffer = "";
        i += 2;
        continue;
      }

      buffer += text[i];
      i++;
      continue;
    }

    if (state == "chem") {
      if (text[i] == "`") {
        state = "normal";
        output.push({ type: "chemical", text: buffer });
        buffer = "";
        i += 1;
        continue;
      }

      buffer += text[i];
      i++;
      continue;
    }

    if (state == "bold") {
      if (text[i] == "*" && text[i + 1] == "*") {
        state = "normal";
        output.push({ type: "b", text: buffer });
        buffer = "";
        i += 2;
        continue;
      }

      buffer += text[i];
      i++;
      continue;
    }

    if (state == "italic") {
      if (text[i] == "*") {
        state = "normal";
        output.push({ type: "i", text: buffer });
        buffer = "";
        i += 1;
        continue;
      }

      buffer += text[i];
      i++;
      continue;
    }

    if (state == "link_head") {
      if (text[i] == "]" && text[i + 1] == "(") {
        state = "link_body";
        i += 2;
        continue;
      }

      buffer += text[i];
      i++;
      continue;
    }

    if (state == "link_body") {
      if (text[i] == ")") {
        state = "normal";
        output.push({ type: "link", text: buffer, ref });
        buffer = "";
        ref = "";
        i += 1;
        continue;
      }

      ref += text[i];
      i++;
      continue;
    }

    i++;
  }

  if (state == "normal") {
    output.push({ type: "p", text: buffer });
  }

  if (state == "italic") {
    output.push({ type: "i", text: buffer });
  }

  if (state == "bold") {
    output.push({ type: "b", text: buffer });
  }

  if (state == "math") {
    output.push({ type: "math", text: buffer });
  }

  if (state == "chem") {
    output.push({ type: "chemical", text: buffer });
  }

  if (state == "link_head") {
    output.push({ type: "normal", text: "[" + buffer });
  }

  if (state == "link_body") {
    output.push({ type: "normal", text: "[" + buffer + "](" + ref });
  }

  return output;
}

export default function Description({ text }: { text: string }) {
  console.log(text);

  let ast = parseToMarkdownAST(text);

  console.log(ast);

  return ast.map((i, n) => {
    if (i.type == "p") return i.text;
    if (i.type == "link")
      return (
        <Link
          key={n}
          className="underline hover:no-underline"
          href={`/word/${i.ref?.slice(1)}`}
        >
          {i.text}
        </Link>
      );
    if (i.type == "b")
      return (
        <b key={n} className="font-bold">
          {i.text}
        </b>
      );
    if (i.type == "i")
      return (
        <i key={n} className="italic">
          {i.text}
        </i>
      );
  });
}
