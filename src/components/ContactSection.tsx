import React, { useState } from 'react';
import { 
  Mail, Phone, Instagram, Linkedin, Twitter, MapPin, 
  Copy, Check, ExternalLink, MessageSquare, Send, Sparkles 
} from 'lucide-react';

interface ContactSectionProps {
  onOpenPage: (pageNumber: number) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPage }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [senderName, setSenderName] = useState('');

  const email = 'kasihduamonika16@gmail.com';
  const phone = '+62 877 5037 1700';

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const whatsappUrl = `https://wa.me/6287750371700?text=${encodeURIComponent(
      `Hello Monika, my name is ${senderName || 'a website visitor'}.\n\n${messageText}`
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setMessageText('');
  };

  return (
    <section id="contact" className="py-12 md:py-20 border-t border-slate-800/80 bg-slate-950/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-950/30 via-slate-900 to-slate-950 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-lime-400/10 px-3 py-1 text-xs font-bold text-lime-400 border border-lime-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let’s Connect!</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Create Something Great Together!
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                "That's a wrap! Thanks for sticking around. I'm always down for new projects or even just a quick chat about design. Let's make something cool together!"
              </p>

              {/* Contact Channels */}
              <div className="space-y-3 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3.5 text-xs text-slate-200">
                  <div className="flex items-center gap-3 truncate">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400">Email</div>
                      <a href={`mailto:${email}`} className="font-semibold hover:text-lime-400 transition truncate">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white transition"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* WhatsApp / Phone Item */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3.5 text-xs text-slate-200">
                  <div className="flex items-center gap-3 truncate">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime-500/20 text-lime-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400">Phone & WhatsApp</div>
                      <a
                        href="https://wa.me/6287750371700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:text-lime-400 transition"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="ml-2 flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white transition"
                    title="Copy WhatsApp number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3.5 text-xs text-slate-200">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/20 text-red-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Based in</div>
                    <div className="font-semibold">Lampung, Indonesia</div>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="https://instagram.com/monikashii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-pink-400 hover:border-slate-700 transition"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@monikashii</span>
                </a>
                <a
                  href="https://twitter.com/KasihDua35296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-slate-700 transition"
                >
                  <Twitter className="w-4 h-4 text-sky-400" />
                  <span>@KasihDua35296</span>
                </a>
                <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>Kasih Dua Monika</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Message Card */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-lime-400" />
                  Send a Direct Message
                </h3>
                
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name / Company
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex - Creative Agency"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Message / Project Inquiry
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello Monika, I saw your portfolio and would like to discuss a graphic design or 3D modeling project..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-lime-400/20 hover:bg-lime-300 transition active:scale-95"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Message Monika on WhatsApp</span>
                </button>

                {formSent && (
                  <p className="text-center text-xs font-semibold text-lime-400 animate-pulse">
                    Redirecting to WhatsApp...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
