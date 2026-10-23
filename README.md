# keret-figyelo

Shows your Claude plan usage in the status line — the current five-hour session and the weekly limit as percentages (e.g. `Keret – Munkamenet: 3% · Heti: 3%`) — and pops up a warning when either passes 80% and 95%. It reads only the rate-limit figures the engine already receives with each response, so it makes no extra requests and uses no extra quota.

## Install

At the prompt of a terminal session:

```
/plugin install keret-figyelo --marketplace torokl68/claude-keret-figyelo
```

From a shell:

```
claude plugin install keret-figyelo --marketplace torokl68/claude-keret-figyelo
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `torokl68/claude-keret-figyelo`, then Add plugin.

Answer `y` to add the marketplace, then pick the user scope so it runs in every session.
