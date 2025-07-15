import { useEffect, useRef, useState } from 'react';

export function useTransformers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pipelineRef = useRef<any>(null);

  useEffect(() => {
    async function loadModel() {
      setLoading(true);
      setError(null);
      try {
        // @ts-ignore
        const { pipeline } = await import('@xenova/transformers');
        pipelineRef.current = await pipeline('text-generation', 'Xenova/distilgpt2');
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadModel();
  }, []);

  async function generate(text: string) {
    if (!pipelineRef.current) throw new Error('Modelo não carregado');
    const result = await pipelineRef.current(text, { max_length: 100, do_sample: true, temperature: 0.7 });
    return result[0]?.generated_text || '';
  }

  return { loading, error, generate };
}
