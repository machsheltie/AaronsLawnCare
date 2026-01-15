# Update Implementation Status

**Trigger:** Use this skill after completing any task, section, or phase in the IMPLEMENTATION_STATUS.md

**Usage:** `/update-status` or mention "update status" or "mark as complete"

---

## Instructions

You are a meticulous project manager tracking implementation progress for the Aaron's Lawn Care website.

When this skill is triggered:

1. **Read Current Status**
   - Read `website/IMPLEMENTATION_STATUS.md`
   - Identify what was just completed
   - Check current completion percentages

2. **Update Completed Items**
   - Change `- [ ]` to `- ✅` for completed tasks
   - Update status from "⏳ PENDING" to "✅ COMPLETED" as needed
   - Add completion date next to completed items

3. **Update Metrics**
   - Recalculate "Production Ready" percentage
   - Update "Phases Complete" count
   - Adjust "Remaining Work" estimates
   - Update phase-specific impact metrics

4. **Add Completion Notes**
   - Add a "Completion Notes" section under newly completed items
   - Include:
     - What was accomplished
     - Key files modified
     - Test results
     - Any issues encountered
     - Git commit hash if applicable

5. **Update Summary Section**
   - Modify the success metrics at the bottom
   - Update "Last Updated" date
   - Add to changelog/history if significant milestone

6. **Check Dependencies**
   - Identify if completing this task unblocks other tasks
   - Update dependent task statuses if applicable
   - Note any new tasks discovered during implementation

7. **Git Commit**
   - Stage the updated IMPLEMENTATION_STATUS.md
   - Commit with message: "docs: Update implementation status - [what was completed]"

## Example Usage

**User:** "I just finished creating the OG image and added it to /public/og-image.jpg"

**Your Response:**
- Read IMPLEMENTATION_STATUS.md
- Find "Create og-image.jpg" in Phase 3 tasks
- Change `- [ ] Create og-image.jpg (1200x630px)` to `- ✅ Create og-image.jpg (1200x630px) - Completed 2025-01-14`
- Update Phase 3 progress percentage
- Recalculate overall production readiness
- Commit the changes
- Inform user of updated metrics

**User:** "mark the Sentry integration as complete"

**Your Response:**
- Find Sentry task in Phase 5
- Mark as complete with date
- Update phase status
- Recalculate percentages
- Note any related tasks that are now unblocked
- Commit changes

## Output Format

After updating, provide a summary:

```
✅ Updated Implementation Status

**Completed:**
- [Task name] (Phase X)

**Metrics Updated:**
- Production Ready: X% → Y% (+Z%)
- Phases Complete: A/5 → B/5
- Remaining Work: X hours → Y hours

**Git Commit:** abc1234 - docs: Update implementation status

**Next Up:**
- [Next logical task based on dependencies]
```

## Important Notes

- Always read the current status before updating
- Be precise with percentage calculations
- Update all related metrics consistently
- Commit changes immediately after updating
- Provide clear summary of what changed
- Suggest next logical tasks based on dependencies and priority

## Success Criteria

- ✅ Status document accurately reflects current state
- ✅ All checkboxes updated correctly
- ✅ Percentages recalculated accurately
- ✅ Completion dates added
- ✅ Git commit created with clear message
- ✅ User receives clear summary of changes
- ✅ Next steps identified and communicated
