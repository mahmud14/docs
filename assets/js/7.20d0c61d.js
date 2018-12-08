(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(e,t,r){"use strict";r.r(t);var s=r(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("Interested in contributing to Flarum development? That's great! From "),r("router-link",{attrs:{to:"./bugs.html"}},[e._v("opening a bug report")]),e._v(" to creating a pull request: every contribution is appreciated and welcome.")],1),e._v(" "),r("p",[e._v("Before contributing, please read the "),r("router-link",{attrs:{to:"./code-of-conduct.html"}},[e._v("code of conduct")]),e._v(".")],1),e._v(" "),r("p",[e._v("This document is a guide for developers who want to contribute code to Flarum. If you're just getting started, we recommend that you read the "),r("router-link",{attrs:{to:"/extend/concepts.html"}},[e._v("Concepts")]),e._v(" documentation in the Extension docs to understand a bit more about how Flarum works.")],1),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Check out the "),r("a",{attrs:{href:"https://flarum.org/roadmap/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Roadmap"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/flarum/core/milestones",target:"_blank",rel:"noopener noreferrer"}},[e._v("Milestones"),r("OutboundLink")],1),e._v(" for an overview of what needs to be done. See the "),r("a",{attrs:{href:"https://github.com/flarum/core/labels/Good%20first%20issue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Good first issue"),r("OutboundLink")],1),e._v(" label for a list of issues that should be relatively easy to get started with.")]),e._v(" "),r("p",[e._v("If you're planning to go ahead and work on something, please comment on the relevant issue or create a new one first. This way we can ensure that your precious work is not in vain.")]),e._v(" "),e._m(2),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/flarum/flarum",target:"_blank",rel:"noopener noreferrer"}},[e._v("flarum/flarum"),r("OutboundLink")],1),e._v(' is a "skeleton" application which uses Composer to download '),r("a",{attrs:{href:"https://github.com/flarum/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("flarum/core"),r("OutboundLink")],1),e._v(" and a "),r("a",{attrs:{href:"https://github.com/flarum",target:"_blank",rel:"noopener noreferrer"}},[e._v("bunch of extensions"),r("OutboundLink")],1),e._v(". In order to work on these, we recommend forking and cloning them into a "),r("a",{attrs:{href:"https://getcomposer.org/doc/05-repositories.md#path",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer path repository"),r("OutboundLink")],1),e._v(":")]),e._v(" "),e._m(3),r("p",[e._v("Flarum's front-end code is written in ES6 and transpiled into JavaScript. During development you will need to recompile the JavaScript using "),r("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(". "),e._m(4),e._v("; this is automatically taken care of when changes are merged into the "),r("code",[e._v("master")]),e._v(" branch.")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),r("p",[e._v("A typical contribution workflow looks like this:")]),e._v(" "),r("ol",[e._m(9),e._v(" "),e._m(10),e._v(" "),r("li",[e._m(11),e._v(" "),r("ul",[r("li",[e._v("Add unit tests as necessary when fixing bugs or adding features.")]),e._v(" "),e._m(12),e._v(" "),r("li",[e._v("See "),r("router-link",{attrs:{to:"./link-to-core/tests/"}},[e._v("here")]),e._v(" for more information about testing in Flarum.\n--\x3e")],1)])]),e._v(" "),r("li",[e._m(13),e._v(" "),r("ul",[r("li",[e._v('If your change resolves an existing issue (usually, it should) include "Fixes #123" on a newline, where 123 is the issue number.')]),e._v(" "),r("li",[e._v("Write a "),r("a",{attrs:{href:"https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("good commit message"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16)]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("In order to keep the Flarum codebase clean and consistent, we have a number of coding style guidelines that we follow. When in doubt, read the source code.")]),e._v(" "),r("p",[e._v("Don't worry if your code styling isn't perfect! StyleCI will automatically merge any style fixes into Flarum repositories after pull requests are merged. This allows us to focus on the content of the contribution and not the code style.")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("Flarum follows the "),r("a",{attrs:{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSR-2"),r("OutboundLink")],1),e._v(" coding standard and the "),r("a",{attrs:{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSR-4"),r("OutboundLink")],1),e._v(" autoloading standard. On top of this, we conform to a number of "),r("a",{attrs:{href:"https://github.com/flarum/core/blob/master/.styleci.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("other style rules"),r("OutboundLink")],1),e._v(". We use PHP 7 type hinting and return type declarations where possible, and "),r("a",{attrs:{href:"https://docs.phpdoc.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHPDoc"),r("OutboundLink")],1),e._v(" to provide inline documentation. Try and mimic the style used by the rest of the codebase in your contributions.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),r("p",[e._v("Flarum's JavaScript mostly follows the "),r("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airbnb Style Guide"),r("OutboundLink")],1),e._v(". We use "),r("a",{attrs:{href:"https://esdoc.org/manual/tags.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESDoc"),r("OutboundLink")],1),e._v(" to provide inline documentation.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),r("p",[e._v("Flarum's CSS classes roughly follow the "),r("a",{attrs:{href:"https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SUIT CSS naming conventions"),r("OutboundLink")],1),e._v(" using the format "),r("code",[e._v(".ComponentName-descendentName--modifierName")]),e._v(".")]),e._v(" "),e._m(27),e._v(" "),r("p",[e._v("We use a "),r("router-link",{attrs:{to:"/extend/i18n.html#appendix-a-standard-key-format"}},[e._v("standard key format")]),e._v(" to name translation keys descriptively and consistently.")],1),e._v(" "),e._m(28),e._v(" "),r("p",[e._v("Most Flarum contributors develop with "),r("a",{attrs:{href:"https://www.jetbrains.com/phpstorm/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHPStorm"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://www.sublimetext.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sublime Text"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("To serve a local forum, "),r("a",{attrs:{href:"https://laravel.com/docs/master/valet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Valet"),r("OutboundLink")],1),e._v(" (Mac), "),r("a",{attrs:{href:"https://www.apachefriends.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("XAMPP"),r("OutboundLink")],1),e._v(" (Windows), and "),r("a",{attrs:{href:"https://github.com/mondediefr/docker-flarum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker-Flarum"),r("OutboundLink")],1),e._v(" (Linux) are popular choices.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"contributing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-to-work-on"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-to-work-on","aria-hidden":"true"}},[this._v("#")]),this._v(" What to Work On")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"development-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Development Setup")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/flarum/flarum.git\n"),r("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" flarum\n\n"),r("span",{attrs:{class:"token comment"}},[e._v("# Set up a Composer path repository for Flarum packages")]),e._v("\ncomposer config repositories.0 path "),r("span",{attrs:{class:"token string"}},[e._v('"packages/*"')]),e._v("\n"),r("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),r("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),r("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v("/core.git packages/core\n"),r("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),r("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),r("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v("/tags.git packages/tags "),r("span",{attrs:{class:"token comment"}},[e._v("# etc")]),e._v("\n\n"),r("span",{attrs:{class:"token comment"}},[e._v('# Replace "^0.1.0" with "^0.1.x-dev" in composer.json')]),e._v("\n"),r("span",{attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),r("span",{attrs:{class:"token string"}},[e._v("'s/\\^0\\.1\\.0/\\^0\\.1\\.x-dev/'")]),e._v(" composer.json\n\ncomposer "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("strong",[this._v("Please do not commit the resulting "),t("code",[this._v("dist")]),this._v(" files when sending PRs")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" packages/core/js\n"),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The process is the same for extensions, except you should link the core JavaScript into the extension so that your IDE will understand "),t("code",[this._v("import from '@flarum/core'")]),this._v(" statements.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" packages/tags/js\n"),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{attrs:{class:"token function"}},[e._v("link")]),e._v(" "),r("span",{attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),r("span",{attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/core/js\n"),r("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"development-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-workflow","aria-hidden":"true"}},[this._v("#")]),this._v(" Development Workflow")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("p",[e._v("🌳 "),r("strong",[e._v("Branch")]),e._v(" off the approprite branch into a new feature branch.")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Bug fixes")]),e._v(" should be sent to the latest stable branch.")]),e._v(" "),r("li",[r("em",[e._v("Minor")]),e._v(" features that are fully backwards compatible with the current Flarum release may be sent to the latest stable branch.")]),e._v(" "),r("li",[r("em",[e._v("Major")]),e._v(" features should always be sent to the "),r("code",[e._v("master")]),e._v(" branch, which contains the upcoming Flarum release.")]),e._v(" "),r("li",[e._v("Internally we use the naming scheme "),r("code",[e._v("<initials>/<short-description>")]),e._v(" (eg. "),r("code",[e._v("tz/refactor-frontend")]),e._v(").")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("🔨 "),t("strong",[this._v("Write")]),this._v(" some code.")]),this._v(" "),t("ul",[t("li",[this._v("See below about "),t("a",{attrs:{href:"#coding-style"}},[this._v("Coding Style")]),this._v(".")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("🚦 "),t("strong",[this._v("Test")]),this._v(" your code.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Run the test suite with "),t("code",[this._v("vendor/bin/phpunit")]),this._v(" in the relevant package folder.\n\x3c!--")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("💾 "),t("strong",[this._v("Commit")]),this._v(" your code with a descriptive message.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("p",[e._v("🎁 "),r("strong",[e._v("Submit")]),e._v(" a Pull Request on GitHub.")]),e._v(" "),r("ul",[r("li",[e._v("Fill out the pull request template.")]),e._v(" "),r("li",[e._v("If your change is visual, include a screenshot or GIF demonstrating the change.")]),e._v(" "),r("li",[e._v("Do NOT check-in the JavaScript "),r("code",[e._v("dist")]),e._v(" files. These will be compiled automatically on merge.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("🤝 "),t("strong",[this._v("Engage")]),this._v(" with the Flarum team for approval.")]),this._v(" "),t("ul",[t("li",[this._v("Team members will review your code. We may suggest some changes or improvements or alternatives, but for small changes your pull request should be accepted quickly.")]),this._v(" "),t("li",[this._v("When addressing feedback, push additional commits instead of overwriting or squashing (we will squash on merge).")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("🕺 "),t("strong",[this._v("Dance")]),this._v(" like you just contributed to Flarum.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"coding-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coding-style","aria-hidden":"true"}},[this._v("#")]),this._v(" Coding Style")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Namespaces should be singular (eg. "),r("code",[e._v("Flarum\\Discussion")]),e._v(", not "),r("code",[e._v("Flarum\\Discussions")]),e._v(")")]),e._v(" "),r("li",[e._v("Interfaces should be suffixed with "),r("code",[e._v("Interface")]),e._v(" (eg. "),r("code",[e._v("MailableInterface")]),e._v(")")]),e._v(" "),r("li",[e._v("Abstract classes should be prefixed with "),r("code",[e._v("Abstract")]),e._v(" (eg. "),r("code",[e._v("AbstractModel")]),e._v(")")]),e._v(" "),r("li",[e._v("Traits should be suffixed with "),r("code",[e._v("Trait")]),e._v(" (eg. "),r("code",[e._v("ScopeVisibilityTrait")]),e._v(")")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[this._v("#")]),this._v(" Database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Columns")]),this._v(" should be named according to their data type:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("DATETIME or TIMESTAMP: "),r("code",[e._v("{verbed}_at")]),e._v(" (eg. created_at, read_at) or "),r("code",[e._v("{verbed}_until")]),e._v(" (eg. suspended_until)")]),e._v(" "),r("li",[e._v("INT that is a count: "),r("code",[e._v("{noun}_count")]),e._v(" (eg. comment_count, word_count)")]),e._v(" "),r("li",[e._v("Foreign key: "),r("code",[e._v("{verbed}_{entity}_id")]),e._v(" (eg. hidden_user_id)\n"),r("ul",[r("li",[e._v("Verb can be omitted for primary relationship (eg. post author is just "),r("code",[e._v("user_id")]),e._v(")")])])]),e._v(" "),r("li",[e._v("BOOL: "),r("code",[e._v("is_{adjective}")]),e._v(" (eg. is_locked)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Tables")]),this._v(" should be named as follows:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Use plural form ("),r("code",[e._v("discussions")]),e._v(")")]),e._v(" "),r("li",[e._v("Separate multiple words with underscores ("),r("code",[e._v("access_tokens")]),e._v(")")]),e._v(" "),r("li",[e._v("For relationships tables, join the two table names in singular form with an underscore in alphabetical order (eg. "),r("code",[e._v("discussion_user")]),e._v(")")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"translations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Translations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"development-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-tools","aria-hidden":"true"}},[this._v("#")]),this._v(" Development Tools")])}],!1,null,null,null);n.options.__file="contributing.md";t.default=n.exports}}]);