"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Upload() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-2 text-lg font-semibold text-foreground">Upload Loan Estimate / Closing Disclosure</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        PDF or image files. We’ll analyze and show you savings opportunities.
      </p>

      <label className="inline-block">
        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            setFileName(f ? f.name : null);
          }}
        />
        <Button type="button">Choose File</Button>
      </label>

      {fileName && (
        <div className="mt-3 text-sm text-foreground">
          Selected: <span className="font-medium">{fileName}</span>
        </div>
      )}

      <div className="mt-4">
        <Button disabled={!fileName} variant="primary">
          Analyze
        </Button>
      </div>
    </div>
  );
}
