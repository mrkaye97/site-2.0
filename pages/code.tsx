import React from "react";

function TextLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="text-light-seafoam hover:text-seafoam-green transition-colors"
      target="_blank"
    >
      {text}
    </a>
  );
}

export default function Code() {
  return (
    <div>
      <p>
        I like writing code for fun, to explore interesting questions and
        problems, and to improve the tools I use.
      </p>

      <h2>ZenSearch</h2>
      <p>
        <TextLink text="ZenSearch" href="https://zensearch.jobs" /> is a NextJS
        / FastAPI app I've been building to make your job hunt more sane.{" "}
        <TextLink
          text="You can read about it on my blog"
          href="https://matthewrkaye.com/posts/2023-11-10-jobcrawler/jobcrawler.html"
        />
        .
      </p>

      <h2>Open-Source Contributions</h2>
      <ul>
        <li>
          <TextLink
            text="Adding JSON schema validation to MLFlow"
            href="https://github.com/mlflow/mlflow/pull/5458"
          />
        </li>
        <li>
          <TextLink
            text="Adding a MAP@K implementation to `recmetrics`"
            href="https://github.com/statisticianinstilettos/recmetrics/pull/50"
          />
        </li>
      </ul>
    </div>
  );
}
