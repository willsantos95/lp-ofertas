import { Check, Zap, Gift, TrendingDown, Users, Shield } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ProgressBar from "@/components/ProgressBar";

// 🔧 ALTERE AQUI o link do seu grupo de WhatsApp
const WHATSAPP_LINK =
  "https://link.relampagodeofertas.shop/FsbJ18";

const benefits = [
  "Ofertas da Shopee, Amazon e Mercado Livre",
  "Cupons exclusivos",
  "Promoções que acabam rápido",
  "Produtos com até 90% de desconto",
  "Atualizações todos os dias",
];

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => {
      if (window.fbq) {
        window.fbq('trackCustom', 'CliqueWhatsApp');
      }
    }}
    className={`inline-flex flex-col items-center justify-center gradient-cta text-whatsapp-foreground font-black rounded-2xl shadow-cta animate-pulse-cta hover:scale-105 transition-transform px-6 py-4 text-lg sm:text-xl w-full ${className}`}
  >
    <span className="flex items-center gap-2">
      GARANTIR MINHA VAGA 🚀
    </span>
    <span className="text-xs font-medium opacity-90 mt-1">
      Acesso imediato e gratuito
    </span>
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-32 md:pb-12">
      {/* Top alert bar */}
      <div className="bg-urgency text-urgency-foreground py-2 px-4 text-center text-xs sm:text-sm font-bold animate-blink-urgent">
        🚨 ÚLTIMAS VAGAS DISPONÍVEIS — ENTRE AGORA!
      </div>

      <main className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-highlight/20 text-highlight-foreground border-2 border-highlight rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold">
            <Zap className="h-4 w-4 fill-highlight" />
            GRUPO VIP GRATUITO
          </div>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            🔥 ENTRE AGORA NO{" "}
            <span className="bg-gradient-to-r from-urgency via-orange-500 to-highlight bg-clip-text text-transparent">
              GRUPO RELÂMPAGO
            </span>{" "}
            DE OFERTAS!
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Participe do grupo de forma <strong className="text-foreground">gratuita</strong> e receba ofertas com até{" "}
            <span className="bg-highlight text-highlight-foreground px-2 py-0.5 rounded font-black">
              90% de desconto
            </span>{" "}
            todos os dias!
          </p>
        </section>

        {/* Countdown */}
        <section className="mt-8 bg-card border-2 border-urgency/30 rounded-2xl p-5 sm:p-6 shadow-glow">
          <CountdownTimer />
        </section>

        {/* Progress */}
        <section className="mt-6 bg-card border-2 border-border rounded-2xl p-5 sm:p-6">
          <ProgressBar />
          <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            Mais de <strong className="text-foreground">879 pessoas</strong> já estão aproveitando as ofertas
          </p>
        </section>

        {/* Mid CTA */}
        <section className="mt-6">
          <CTAButton />
          <p className="text-center text-xs text-urgency font-bold mt-3 animate-blink-urgent">
            ⚠️ As vagas são limitadas e podem encerrar a qualquer momento
          </p>
        </section>

        {/* Benefits */}
        <section className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-5">
            O que você vai receber:
          </h2>
          <ul className="space-y-3 bg-card border-2 border-border rounded-2xl p-5 sm:p-6">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base sm:text-lg font-medium">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Visual icons row */}
        <section className="mt-6 grid grid-cols-3 gap-3">
          <div className="bg-card border-2 border-border rounded-xl p-3 text-center">
            <TrendingDown className="h-6 w-6 mx-auto text-urgency" />
            <p className="text-[10px] sm:text-xs font-bold mt-1">ATÉ 90% OFF</p>
          </div>
          <div className="bg-card border-2 border-border rounded-xl p-3 text-center">
            <Gift className="h-6 w-6 mx-auto text-highlight" />
            <p className="text-[10px] sm:text-xs font-bold mt-1">CUPONS GRÁTIS</p>
          </div>
          <div className="bg-card border-2 border-border rounded-xl p-3 text-center">
            <Zap className="h-6 w-6 mx-auto text-whatsapp" />
            <p className="text-[10px] sm:text-xs font-bold mt-1">TEMPO REAL</p>
          </div>
        </section>

        {/* Main CTA (desktop visible) */}
        <section className="mt-8">
          <CTAButton />
          <p className="text-center text-xs text-urgency font-bold mt-3 animate-blink-urgent">
            ⚠️ As vagas são limitadas e podem encerrar a qualquer momento
          </p>
        </section>

        {/* Trust */}
        <section className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>2026 Relâmpago de Ofertas - 100% gratuito</span>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur border-t-2 border-border p-3 shadow-2xl">
        <CTAButton />
      </div>
    </div>
  );
};

export default Index;
