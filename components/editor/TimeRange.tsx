'use client';

import type { Dictionary } from '@/i18n/dictionaries';
import { ClockIcon } from '@/components/ui/Icons';

interface Props {
  dict: Dictionary;
  duration: number;
  start: number;
  end: number;
  currentTime: number;
  onStartChange: (value: number) => void;
  onEndChange: (value: number) => void;
  onUseCurrent: (field: 'start' | 'end') => void;
}

function Field({
  label,
  value,
  max,
  onChange,
  onUseCurrent,
  useLabel,
}: {
  label: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
  onUseCurrent: () => void;
  useLabel: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-ink-700">{label}</span>
      <div className="flex gap-2">
        <input
          type="number"
          min={0}
          max={max || undefined}
          step={0.1}
          value={Number.isFinite(value) ? value : 0}
          onChange={(event) => onChange(Number(event.target.value))}
          className="min-w-0 flex-1 rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
        <button
          type="button"
          onClick={onUseCurrent}
          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-xs font-medium text-ink-700 transition hover:bg-ink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
        >
          <ClockIcon className="h-4 w-4" />
          {useLabel}
        </button>
      </div>
    </label>
  );
}

export default function TimeRange({
  dict,
  duration,
  start,
  end,
  currentTime,
  onStartChange,
  onEndChange,
  onUseCurrent,
}: Props) {
  return (
    <section className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-ink-900">{dict.editor.time.title}</h3>
      <p className="mt-1 text-xs text-ink-500">
        {dict.editor.time.duration}: {duration > 0 ? `${duration.toFixed(2)}s` : '—'} · {dict.editor.time.hint}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field
          label={dict.editor.time.start}
          value={start}
          max={duration}
          onChange={onStartChange}
          onUseCurrent={() => onUseCurrent('start')}
          useLabel={dict.editor.time.useCurrent}
        />
        <Field
          label={dict.editor.time.end}
          value={end}
          max={duration}
          onChange={onEndChange}
          onUseCurrent={() => onUseCurrent('end')}
          useLabel={dict.editor.time.useCurrent}
        />
      </div>

      <p className="mt-3 text-xs text-ink-400">
        {dict.editor.time.useCurrent}: {currentTime.toFixed(2)}s
      </p>
    </section>
  );
}
