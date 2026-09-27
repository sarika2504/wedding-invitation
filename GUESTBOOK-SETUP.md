# Guest wishes + photo sharing

The current website has a working guestbook demo using browser localStorage:
- Guests can enter their name, relation, wishes/experience and a photo.
- The note immediately appears on the Love Notes wall.
- WhatsApp share button shares the wedding link.

For a **real shared guestbook visible to everyone on every phone**, connect the form to a backend such as Supabase:
1. Create a Supabase project.
2. Create a `wishes` table with: `id`, `name`, `relation`, `message`, `photo_url`, `created_at`.
3. Create a Storage bucket named `wedding-photos`.
4. Add the project URL and anon key in a small `supabase-config.js` file and replace the localStorage save/load functions in `script.js`.
5. Enable only the permissions you want (for example, public insert/select with no delete for guests).

The UI is already prepared; the only missing piece is your own backend credentials, which should never be hard-coded into a public chat message.

## Music
The music button is included. If `assets/soft-music.mp3` exists, it plays that file at low volume. If it does not, the site creates a very soft ambient chime loop in the browser, so the button still works.


## Photo layout
The public gallery intentionally uses only three unique couple photos, all prepared as 4:3 landscape crops. The bride/groom cards use separate 4:5 portrait crops, and the hero/venue use 16:9 crops so images are not stretched or distorted.
