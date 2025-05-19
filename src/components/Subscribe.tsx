import React from "react";

export default function Subscribe() {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold">Join the newsletter</h2>
        <p className="text-muted-foreground">
          Get the latest AI news delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 px-4 py-2 rounded-md bg-background border border-border placeholder-muted-foreground"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
