# Container door fix brief (2026-10-18)

The site owner (a working freight forwarder) found container doors drawn wrong in several illustrations. Fix every image in the list below that breaks any of these rules. Keep each image's composition, style (semi-flat navy/blue editorial illustration, white background where it had one), people, cargo, labels and aspect ratio as close to the original as possible. Change only what is needed to make the container doors correct.

## How ISO dry container doors really look
1. Two door leaves at the door end only. Each leaf is hinged on its OUTER vertical edge, to the rear corner post on its own side (4 hinges per leaf). The two leaves meet in the middle when closed. A leaf is never hinged on the edge that meets the other leaf.
2. ALL locking gear is on the OUTER face only: two vertical locking bars (lock rods) per leaf, cam keepers at top and bottom, a handle on each bar, handle retainers, the seal point. The INNER face of a door is a plain corrugated steel panel with a rubber gasket around its edge. Never draw locking bars, handles or cams on the inside of a door.
3. Open positions:
   - Opened about 90°: each leaf sticks straight out from its own corner post, perpendicular to the door end. The outer face (with locking bars) faces outward, away from the opening; the plain inner face faces the opening's centreline.
   - Opened fully (about 270°): each leaf is swung all the way back and lies flat against its own side wall. Then the locking bars are hidden against the side wall and only the plain inner face is visible.
   - A door is never standing in the same plane as the door end next to the opening, never floating free, and never attached to the roof or floor.
4. Doors exist only at the door end. Other features stay as they are: corrugated side walls, corner castings at all eight corners, forklift pockets only on 20ft where shown, reefer machinery on the opposite end for reefers.

## Images to check (do not touch any other file)
images/ctu/collapsed-cargo-v2.webp (KNOWN WRONG: left door floats beside the opening, doors show locking bars on the wrong face)
images/ctu/container-structure-v3.webp (KNOWN WRONG: locking bars drawn on the inside of the open doors)
images/ctu/information-flow-v2.webp (KNOWN WRONG: doors hung wrong)
images/ctu/ctu-code-scope-v2.webp
images/ctu/ctu-for-cargo-v2.webp
images/ctu/packing-completion-v3.webp
images/ctu/packing-rows.webp
images/ctu/packing-training-v2.webp
images/ctu/poor-packing-results.webp
images/ctu/receiving-inspection.webp
images/ctu/unpacking-steps.webp
images/ctu/supply-chain-parties.webp
images/battery/battery-hero.webp
images/insurance/insurance-hero.webp

## Output
- For each image that needs fixing, write a corrected image next to it with a new name: <name>-doorfix.webp (WebP, same pixel size as the original). Do not overwrite or delete originals.
- Write images/_door-fix-report.md: for every listed image, either "OK (why)" or "FIXED (what was wrong, what changed)".
- Before finishing, look at each new image yourself and confirm rules 1-3 hold for every visible door. Redraw if not.
