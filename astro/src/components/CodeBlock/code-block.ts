import { html, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { codeBlockStyles} from './code-block-styles';
import Prism from "prismjs";
import "prismjs/components/prism-bash.js";

@customElement("code-block")
export class CodeBlock extends LitElement {
  static styles = [codeBlockStyles];

  @property({ type: String, attribute: "code" })
  code = "";

  @property({ type: String, attribute: "language" })
  language = "";

  @state()
  isCopied = false;

  copyCode() {
    this.isCopied = true;
    const codeElement = this.shadowRoot.querySelector("code");
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    // check if the browser supports clipboard API
    if (!navigator.clipboard) {
      // if not use the old execCommand() way
      document.execCommand('copy');
    } else {
      try {
        navigator.clipboard.writeText(range.toString());
      } catch (error) {
        console.error(error);
      }
    }
    window.getSelection().removeAllRanges();
    // Set a timeout to reset the button
    setTimeout(() => {
      this.isCopied = false;
    }, 1000);
  }

  firstUpdated() {
    const highlight = Prism.highlight(
      this.code,
      Prism.languages[this.language],
      this.language
    );
    // Set to our styled block
    this.shadowRoot.querySelector("#output").innerHTML = highlight;
  }

  render() {
    return html`
      <div id="code-block__container">
        <button @click=${this.copyCode}>
          ${this.isCopied ? "Copied! 🎉" : "Copy"}
        </button>
        <pre class=${`language-${this.language}`}>
          <div id="language-tag">${this.language}</div>
          <code id="output"></code>
        </pre>
      </div>
    `;
  }
}
