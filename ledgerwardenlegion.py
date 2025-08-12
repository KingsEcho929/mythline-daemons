# ledgerwardenlegion.py
import datetime

class LedgerWardenLegion:
    def __init__(self, ledger_path="TombLedger.md"):
        self.ledger_path = ledger_path

    def archive(self, entry, sigil="📜🛡️"):
        timestamp = datetime.datetime.now().isoformat()
        line = f"- {timestamp} :: {entry} [{sigil}]\n"
        with open(self.ledger_path, "a") as log:
            log.write(line)
        print(f"{sigil} LedgerWardenLegion archived: {entry}")
