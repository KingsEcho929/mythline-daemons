# tt_shell.py
from ledgerwardenlegion import LedgerWardenLegion

while True:
    intent = input("TT> ")
    if intent.startswith("ledgerwardenlegion: archive"):
        entry = intent.split("archive", 1)[1].strip()
        LedgerWardenLegion().archive(entry)
