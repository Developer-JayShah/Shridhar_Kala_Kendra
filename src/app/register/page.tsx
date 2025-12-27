"use client";

import { useMemo, useState } from "react";

type Gender = "Male" | "Female" | "Other";
type Level = "Beginner" | "Intermediate" | "Advance";
type Batch = "Mon–Tue" | "Wed–Thu" | "Sat–Sun";
type Country = "USA" | "UK" | "CANADA" | "INDIA";

type FormState = {
  name: string;
  age: string;
  dob: string;
  gender: Gender;
  genderOther: string;

  whatsapp: string;
  email: string;

  level: Level;
  batch: Batch;
  country: Country;

  goals: string;
  background: string;

  heard: string[]; // Instagram, Facebook, Friends/Family, Other
  heardOther: string;
};

const initialState: FormState = {
  name: "",
  age: "",
  dob: "",
  gender: "Male",
  genderOther: "",

  whatsapp: "",
  email: "",

  level: "Beginner",
  batch: "Mon–Tue",
  country: "USA",

  goals: "",
  background: "",

  heard: [],
  heardOther: "",
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const isOtherGender = form.gender === "Other";
  const isHeardOther = form.heard.includes("Other");

  const fees = useMemo(() => {
    // You shared only Beginner fees. We keep others as “Contact us”.
    const isIndia = form.country === "INDIA";
    const beginnerFee = isIndia ? "₹1500 / month" : "$160 / month";
    return {
      beginnerFee,
      note: isIndia
        ? "India residents pricing."
        : "International pricing (USA/UK/CANADA).",
    };
  }, [form.country]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function toggleHeard(item: string) {
    setForm((p) => {
      const exists = p.heard.includes(item);
      const next = exists ? p.heard.filter((x) => x !== item) : [...p.heard, item];
      return { ...p, heard: next };
    });
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.age.trim()) return "Please enter your age.";
    if (!/^\d+$/.test(form.age.trim())) return "Age should be a number.";
    if (!form.whatsapp.trim()) return "Please enter your WhatsApp number.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Please enter a valid email.";
    if (isOtherGender && !form.genderOther.trim()) return "Please specify gender.";
    if (isHeardOther && !form.heardOther.trim()) return "Please specify how you heard about us.";
    return "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setErrorMsg("");

    const msg = validate();
    if (msg) {
      setStatus("error");
      setErrorMsg(msg);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        age: form.age.trim(),
        dob: form.dob.trim() || undefined,
        gender: form.gender,
        genderOther: form.gender === "Other" ? form.genderOther.trim() : undefined,

        whatsapp: form.whatsapp.trim(),
        email: form.email.trim(),

        level: form.level,
        batch: form.batch,
        country: form.country,

        goals: form.goals.trim() || undefined,
        background: form.background.trim() || undefined,

        heard: form.heard,
        heardOther: form.heard.includes("Other") ? form.heardOther.trim() : undefined,
      };

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to submit. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

return (
  <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 pb-14">
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] text-amber-200/80">
            BIJALSANGNAACH • REGISTRATION
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Register / Enquire</h1>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Online Kathak classes (Beginner / Intermediate / Advance). After you submit,
            you’ll receive a confirmation and we’ll reach out personally.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name *">
                <Input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Full name"
                />
              </Field>

              <Field label="Age *">
                <Input
                  value={form.age}
                  onChange={(e) => update("age", e.target.value)}
                  placeholder="e.g., 12"
                  inputMode="numeric"
                />
              </Field>

              <Field label="Date of Birth (MM/DD/YYYY)">
                <Input
                  value={form.dob}
                  onChange={(e) => update("dob", e.target.value)}
                  placeholder="MM/DD/YYYY"
                />
              </Field>

              <Field label="Gender *">
                <Select
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value as Gender)}
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                  ]}
                />
              </Field>

              {isOtherGender && (
                <Field label="Please specify gender *" className="md:col-span-2">
                  <Input
                    value={form.genderOther}
                    onChange={(e) => update("genderOther", e.target.value)}
                    placeholder="Write here..."
                  />
                </Field>
              )}

              <Field label="Contact Number (WhatsApp only) *">
                <Input
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="+1 732..."
                />
              </Field>

              <Field label="Email *">
                <Input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Level *">
                <Select
                  value={form.level}
                  onChange={(e) => update("level", e.target.value as Level)}
                  options={[
                    { value: "Beginner", label: "Beginner" },
                    { value: "Intermediate", label: "Intermediate (min 3 years exp.)" },
                    { value: "Advance", label: "Advance (min 5+ years exp.)" },
                  ]}
                />
              </Field>

              <Field label="Batch *">
                <Select
                  value={form.batch}
                  onChange={(e) => update("batch", e.target.value as Batch)}
                  options={[
                    { value: "Mon–Tue", label: "Weekdays (Monday–Tuesday)" },
                    { value: "Wed–Thu", label: "Weekdays (Wednesday–Thursday)" },
                    { value: "Sat–Sun", label: "Weekend (Saturday–Sunday)" },
                  ]}
                />
              </Field>

              <Field label="Your Country (fee structure) *">
                <Select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value as Country)}
                  options={[
                    { value: "USA", label: "USA" },
                    { value: "UK", label: "UK" },
                    { value: "CANADA", label: "CANADA" },
                    { value: "INDIA", label: "INDIA" },
                  ]}
                />
              </Field>

              <Field label="Any specific goals? (Exams, performance, hobby, fitness etc.)" className="md:col-span-2">
                <Textarea
                  value={form.goals}
                  onChange={(e) => update("goals", e.target.value)}
                  placeholder="Tell us what you want to achieve..."
                />
              </Field>

              <Field label="Any previous dance background (other styles)?" className="md:col-span-2">
                <Textarea
                  value={form.background}
                  onChange={(e) => update("background", e.target.value)}
                  placeholder="Optional"
                />
              </Field>

              <Field label="How did you hear about our Kathak Classes?" className="md:col-span-2">
                <div className="grid gap-3 md:grid-cols-2">
                  <Check label="Instagram" checked={form.heard.includes("Instagram")} onChange={() => toggleHeard("Instagram")} />
                  <Check label="Facebook" checked={form.heard.includes("Facebook")} onChange={() => toggleHeard("Facebook")} />
                  <Check label="Friends / Family" checked={form.heard.includes("Friends/Family")} onChange={() => toggleHeard("Friends/Family")} />
                  <Check label="Other" checked={form.heard.includes("Other")} onChange={() => toggleHeard("Other")} />
                </div>

                {isHeardOther && (
                  <div className="mt-3">
                    <Input
                      value={form.heardOther}
                      onChange={(e) => update("heardOther", e.target.value)}
                      placeholder="Please specify..."
                    />
                  </div>
                )}
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {status === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  Submitted successfully! We’ll contact you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className={cx(
                  "rounded-xl bg-amber-300 px-5 py-3 font-semibold text-neutral-900 transition",
                  "hover:bg-amber-200",
                  submitting && "cursor-not-allowed opacity-70"
                )}
              >
                {submitting ? "Submitting..." : "Submit Registration"}
              </button>

              <p className="text-xs text-neutral-400">
                By submitting, you agree that we may contact you via email/WhatsApp.
              </p>
            </div>
          </form>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <Card title="Online Trial Classes">
              <p className="text-sm text-neutral-300">
                Classes are conducted online via Zoom. If you miss a class, recording will be
                available for 7 days.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                  <p className="font-semibold">Beginner Schedule</p>
                  <ul className="mt-2 space-y-1 text-neutral-300">
                    <li>Mon–Tue: 8:30–9:30 PM (EST) / 7:00–8:00 AM (IST)</li>
                    <li>Wed–Thu: 7:30–8:30 PM (EST) / 6:00–7:00 AM (IST)</li>
                    <li>Sat–Sun: 8:30–9:30 AM (EST) / 7:00–8:00 PM (IST)</li>
                  </ul>
                  <p className="mt-2 text-neutral-400">Total: 8 classes per month</p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                  <p className="font-semibold">Fees (Beginner)</p>
                  <p className="mt-2 text-neutral-300">{fees.beginnerFee}</p>
                  <p className="mt-1 text-xs text-neutral-400">{fees.note}</p>
                  <p className="mt-2 text-xs text-neutral-400">
                    If you reside outside India (even if you are an Indian citizen), international fees apply.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                  <p className="font-semibold">Trial Class</p>
                  <p className="mt-2 text-neutral-300">December 27, 2025</p>
                  <p className="mt-1 text-neutral-300">India: 7:00–7:30 PM (IST)</p>
                  <p className="mt-1 text-neutral-300">USA/UK/CANADA: 8:00–8:30 AM (EST)</p>
                </div>
              </div>
            </Card>

            <Card title="Need help?">
              <p className="text-sm text-neutral-300">
                If you have questions before registering, submit this form and we will message you.
              </p>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-2 block text-sm font-medium text-neutral-200">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100",
        "placeholder:text-neutral-500 focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
      )}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={4}
      className={cx(
        "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100",
        "placeholder:text-neutral-500 focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
      )}
    />
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={cx(
        "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100",
        "focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
      )}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-neutral-950">
          {o.label}
        </option>
      ))}
    </select>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cx(
        "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
        checked
          ? "border-amber-300/60 bg-amber-300/10 text-amber-200"
          : "border-neutral-800 bg-neutral-950/40 text-neutral-200 hover:bg-neutral-900/40"
      )}
      aria-pressed={checked}
    >
      <span
        className={cx(
          "h-4 w-4 rounded border",
          checked ? "border-amber-300 bg-amber-300" : "border-neutral-500"
        )}
      />
      {label}
    </button>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <h3 className="font-serif text-xl">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
