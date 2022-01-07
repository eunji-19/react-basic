import React, { useState, useEffect } from "react";

export default function withLoading(Component) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <p>Loading...</p> : <button>Button</button>;
}
