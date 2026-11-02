export type FieldNote = {
  slug: string;
  title: string;
  description: string;
  minutes: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  sources: { title: string; href: string }[];
};
export const fieldNotes: FieldNote[] = [
  {
    slug: "reduce-llm-inference-costs",
    title: "How to reduce LLM inference costs without losing useful output",
    description:
      "A workload-first sequence for cutting AI spend: accepted-task baselines, context, model routing, caching, batching, and total delivery cost.",
    minutes: "6 min read",
    sections: [
      {
        title: "Start with the bill and the work it bought",
        paragraphs: [
          "An inference bill is easy to lower by doing less work. The useful question is whether you can complete the same valuable work for less. Before optimizing, choose a representative workload and record both its full cost and the results someone accepted.",
          "Use the invoice rather than the headline rate. Include input, output, billed reasoning, tools, cache writes, retrieval, retries, and the review required to make a result usable. Keep a separate record of latency and peak demand. A cost reduction that breaks the service requirement is a different product decision.",
        ],
        bullets: [
          "Count accepted tasks, not just API requests.",
          "Include every attempt and repair step in the task’s cost.",
          "Keep quality and latency thresholds fixed while testing a change.",
        ],
      },
      {
        title: "Remove context that does not change the answer",
        paragraphs: [
          "Repeated instructions, irrelevant retrieved passages, and complete histories can inflate an input without improving a result. Build a small evaluation set before trimming. Compare the accepted-result rate and the failure cases as carefully as the token count.",
          "For retrieval workflows, test whether fewer, more relevant passages outperform a larger context dump. For conversations, decide which state must be preserved explicitly. Shorter context can also remove evidence a model needed, so the winning configuration is the one that passes the workload test.",
        ],
      },
      {
        title: "Route by demonstrated task difficulty",
        paragraphs: [
          "A smaller or cheaper model may be enough for a bounded extraction, classification, or transformation. Evaluate that exact task before routing it away from a stronger model. A low-cost first attempt followed by a second expensive attempt can raise the total bill.",
          "Track the cost and success of the entire route, including fallback. Set an escalation rule you can explain: failed schema validation, insufficient evidence, or a task category that your evaluation showed to be difficult. Confidence expressed in the model’s prose is not an acceptance test.",
        ],
      },
      {
        title: "Use caching and batching where the workflow permits",
        paragraphs: [
          "Caching and asynchronous batch processing can change effective prices, but they depend on provider rules and workload structure. Verify the exact model, eligible request shape, cache lifetime, write cost, and delivery window before counting a discount.",
          "Repeated stable prefixes may benefit from caching; constantly changing prompts may not. Batch processing may suit overnight jobs while being inappropriate for a user waiting on a response. An operational constraint belongs in the cost model alongside the rate.",
        ],
      },
      {
        title: "Compare the new system with the new baseline",
        paragraphs: [
          "Once you optimize managed usage, revisit the hardware decision. If a team lowers its API bill, it has also reduced the spending a server could eliminate. The payback threshold moves.",
          "For an illustrative example, a $6,000 purchase with $100 a month of operations saves $400 a month against a fully replaced $500 API bill, giving 15 months of simple payback. If prompt and routing improvements reduce that API bill to $200, the same purchase saves $100 a month and takes 60 months. Neither number predicts model equivalence or useful hardware life.",
          "Use the cost calculator with the optimized invoice and a replacement percentage supported by a pilot. The strongest improvement is the one that lowers the cost of an accepted result while preserving the reason people use the system.",
        ],
      },
    ],
    sources: [
      {
        title: "LLM cost comparison and calculator",
        href: "/blog/ai-llm-cost-comparison/",
      },
      {
        title: "vLLM optimization and tuning",
        href: "https://docs.vllm.ai/en/latest/configuration/optimization/",
      },
    ],
  },
  {
    slug: "cost-per-successful-ai-task",
    title: "Cost per successful AI task: a worked evaluation study",
    description:
      "An explicit, hypothetical comparison showing how acceptance rate, repair labor, and routing change the economics of AI workflows.",
    minutes: "6 min read",
    sections: [
      {
        title: "A cheaper attempt can cost more to finish",
        paragraphs: [
          "This is a worked calculation with hypothetical data, not a measured model benchmark. Its purpose is to make the evaluation method visible so you can replace the numbers with results from your own workload.",
          "Assume two systems each receive 1,000 attempts drawn from the same task distribution. System A costs $0.10 an attempt and produces 900 accepted results. System B costs $0.04 an attempt and produces 300 accepted results. With no repair labor, A spends $100 and averages $0.111 per accepted result. B spends $40 and averages $0.133. Lower spending bought far less completed work.",
        ],
      },
      {
        title: "Normalize the amount of completed work",
        paragraphs: [
          "The first comparison reports what happened to equal attempt counts. A purchase decision also needs the cost of delivering a fixed volume of accepted results. Use replayable, representative tasks and run the complete workflow, including retries and fallback, rather than multiplying an average acceptance probability without testing it.",
          "Failures can be correlated. A model that misunderstands a document may fail again on the same document. A retry policy is part of the evaluated system. Comparing the best run from one model with the first run from another produces a misleading result.",
        ],
        bullets: [
          "Choose acceptance criteria before seeing model outputs.",
          "Run the same task set and workflow constraints for each system.",
          "Keep failed attempts in the cost denominator’s supporting ledger.",
          "Report accepted count, rejection reasons, retries, latency, and total spend together.",
        ],
      },
      {
        title: "Add the cost of repair",
        paragraphs: [
          "Extend the example: A needs 30 minutes of human correction and B needs 120 minutes, both valued at an illustrative $60 per hour. A’s delivery cost becomes $130, or $0.144 per accepted result. B’s becomes $160, or $0.533. These figures assume that the reported accepted counts already include the work repaired during that period; they are not a claim about any named model.",
          "Separate active repair time from time a person could use for something else. Value recovered time conservatively. Avoid counting review both as a flat operating allowance and as per-task labor. The same cost should enter the ledger once.",
        ],
      },
      {
        title: "Use a task ledger you can audit",
        paragraphs: [
          "For each task, retain a task ID, model and configuration, total billed input and output, tool charges, attempts, wall time, reviewer decision, rejection reason, and active repair minutes. Use a representative sample and report its size and selection method.",
          "In the infrastructure calculator, enter total monthly API spending inclusive of failed attempts, the number of accepted tasks, and the operating labor required by the proposed replacement. The resulting unit cost is meaningful only if all options can serve the same accepted workload at the required service level.",
        ],
      },
      {
        title: "Keep business ROI as a second comparison",
        paragraphs: [
          "A lower delivery cost is evidence about the workflow. Business ROI also depends on adoption, integration, maintenance, quality, and what the accepted result allows the organization to do. Compare the process with AI against the process without it.",
          "Publish your actual task set, acceptance rules, cost ledger, and limitations before making a broad model recommendation. A small controlled study can be useful without pretending to establish a universal winner.",
        ],
      },
    ],
    sources: [
      {
        title: "Interactive infrastructure cost and ROI calculator",
        href: "/blog/ai-llm-cost-comparison/",
      },
      {
        title: "How to reduce LLM inference costs",
        href: "/blog/reduce-llm-inference-costs/",
      },
    ],
  },
  {
    slug: "local-llm-benchmark-method",
    title: "Before you buy a GPU: a local LLM benchmark method",
    description:
      "A reproducible plan for evaluating local AI quality, throughput, power, and cost against the workflow you want to replace.",
    minutes: "5 min read",
    sections: [
      {
        title: "Loading a model is the start of the test",
        paragraphs: [
          "This article is a benchmark protocol, not a report of measured hardware results. A local model needs to do more than return text: it must complete the workload at useful quality and speed, within a memory budget, while serving the people who rely on it.",
          "A credible hardware case study starts with a real bill of materials and a reproducible workload. Record hardware configuration, memory, operating system, model identifier, quantization, serving version, context settings, and every relevant runtime option. A price without that context cannot tell another team what it is buying.",
        ],
      },
      {
        title: "Use a representative workload and an acceptance rubric",
        paragraphs: [
          "Sample tasks from the work you intend to move, with confidential material removed or handled under an approved process. Preserve the range of prompt lengths and difficulty. Agree on acceptance criteria before running the models.",
          "Run both cold and warmed requests, report them separately, and keep errors. Repeat enough tasks to show variation rather than selecting the most flattering run. Reviewer acceptance belongs in the results file; token throughput cannot determine whether an answer was useful.",
        ],
        bullets: [
          "Record time to first token and full completion time with a streaming client.",
          "Measure accepted results, retries, failures, and active human repair.",
          "Test the intended context lengths and peak concurrency separately.",
          "Record wall power at idle and under load, with the measurement method.",
        ],
      },
      {
        title: "Start with the downloadable run recorder",
        paragraphs: [
          "The accompanying Node.js script sends a JSONL task file to a local OpenAI-compatible chat endpoint and writes a JSONL ledger containing configuration, returned usage, completion time, output, and errors. It intentionally leaves reviewer acceptance blank.",
          "This first recorder uses non-streaming sequential requests. It measures total completion time; it does not measure first-token latency, peak concurrency, power, or end-to-end service capacity. Use it as a smoke test and evidence format, then extend the workload for those separate measurements. Never label its output a production-capacity benchmark.",
          "Run with Node 22 or newer: node record-local-benchmark.mjs tasks.jsonl results.jsonl. Set LOCAL_LLM_MODEL and, if needed, LOCAL_LLM_URL. Each task line needs an id and a prompt. The default URL is http://127.0.0.1:11434/v1/chat/completions. The script accepts loopback destinations only and will not overwrite an existing results file.",
        ],
      },
      {
        title: "Price the configuration that passed",
        paragraphs: [
          "Use the actual hardware quote or sunk-cost decision, measured power, hosting, support, operating labor, and remaining API bill. Enter the fraction of API dollars your pilot eliminated, rather than the fraction of requests it processed.",
          "A publishable result should include the task-selection method, acceptance rubric, complete ledger, software versions, power method, throughput under the intended load, and limitations. A configuration that passes a narrow workflow is a useful finding even if it cannot replace a general-purpose cloud model.",
          "The measured workstation case study will require those inputs. Until then, a transparent protocol is more useful than an invented speed or savings claim.",
        ],
      },
    ],
    sources: [
      {
        title: "Download the local benchmark recorder",
        href: "/downloads/record-local-benchmark.mjs",
      },
      {
        title: "vLLM benchmarking documentation",
        href: "https://docs.vllm.ai/en/latest/benchmarking/",
      },
      {
        title: "Compare your measured setup in the cost calculator",
        href: "/blog/ai-llm-cost-comparison/",
      },
    ],
  },
];
