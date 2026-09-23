"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  User,
  Building2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Package,
  Clock,
  LogOut,
  Sparkles,
  Lock,
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTracking?: (orderId: string) => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onOpenTracking,
}: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"customer" | "dealer">("customer");

  // Customer Auth State
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState(["4", "2", "2", "4"]);
  const [otpTimer, setOtpTimer] = useState(30);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);

  // Dealer Auth State
  const [dealerCode, setDealerCode] = useState("");
  const [dealerPassword, setDealerPassword] = useState("");
  const [isDealerLoggedIn, setIsDealerLoggedIn] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpStep && otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpStep, otpTimer]);

  if (!isOpen) return null;

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      setOtpStep(true);
      setOtpTimer(30);
    }
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCustomerLoggedIn(true);
    setOtpStep(false);
  };

  const handleDealerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (dealerCode.trim()) {
      setIsDealerLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsCustomerLoggedIn(false);
    setIsDealerLoggedIn(false);
    setOtpStep(false);
    setMobileNumber("");
    setDealerCode("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red text-white shadow-md">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">
                {isCustomerLoggedIn
                  ? "My Customer Account"
                  : isDealerLoggedIn
                  ? "Dealer Partner Portal"
                  : "Sign In / Register"}
              </h3>
              <p className="text-xs text-slate-400">
                Nanhey Accessories • Begusarai Showroom
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Switcher (if not logged in) */}
        {!isCustomerLoggedIn && !isDealerLoggedIn && (
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 text-xs font-bold text-center">
            <button
              onClick={() => {
                setActiveTab("customer");
                setOtpStep(false);
              }}
              className={`py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
                activeTab === "customer"
                  ? "border-brand-red text-brand-red bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <User className="h-4 w-4" />
              <span>Customer Login</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("dealer");
                setOtpStep(false);
              }}
              className={`py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
                activeTab === "dealer"
                  ? "border-brand-red text-brand-red bg-white"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Dealer / Wholesale</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6">
          {/* ================= STATE 1: CUSTOMER LOGGED IN ================= */}
          {isCustomerLoggedIn && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red text-white font-black text-sm">
                    RK
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      Ramesh Kumar
                    </h4>
                    <p className="text-xs text-slate-500">+91 {mobileNumber || "9065224224"}</p>
                    <span className="text-[10px] text-brand-accent-green font-bold">
                      ● Begusarai Verified Customer
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-slate-400 hover:text-brand-red p-1.5 rounded-lg border border-slate-200 hover:border-brand-red transition-colors"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>

              {/* Order History Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Recent Order History</span>
                  <span className="text-slate-400 text-[11px]">1 Active Order</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-brand-red">
                      #NA-85421
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                      Out for Installation
                    </span>
                  </div>

                  <p className="font-semibold text-slate-800 text-[11px]">
                    4 Camera Full HD CCTV Kit + 1TB HDD
                  </p>

                  <div className="flex items-center justify-between text-slate-500 text-[10px] pt-1 border-t border-slate-200">
                    <span>Ordered: 23 Sep 2026</span>
                    <span>Total: ₹14,999</span>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      if (onOpenTracking) onOpenTracking("NA-85421");
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-[11px] hover:bg-slate-800 transition-colors"
                  >
                    <Package className="h-3.5 w-3.5" />
                    <span>Track Installation Status</span>
                  </button>
                </div>
              </div>

              {/* Default Address */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                  Saved Installation Address:
                </span>
                <p className="text-slate-800 font-medium">
                  Ambedkar Chowk, Near Kali Mandir, Begusarai, Bihar – 851101
                </p>
              </div>
            </div>
          )}

          {/* ================= STATE 2: DEALER LOGGED IN ================= */}
          {isDealerLoggedIn && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent-green text-slate-950 font-black text-sm">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">
                      Mithila Security Solutions
                    </h4>
                    <p className="text-xs text-slate-300">GSTIN: 10AAGFN4224J1ZV</p>
                    <span className="text-[10px] text-brand-accent-green font-bold uppercase">
                      ★ Gold Wholesale Dealer
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-slate-400 hover:text-white p-1.5 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 text-xs text-emerald-900 space-y-1.5">
                <p className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Wholesale Dealer Margins Active (28% Trade Discount)</span>
                </p>
                <p className="text-[11px] text-emerald-700">
                  Dealer credit limit: ₹2,50,000 | Same-day pickup enabled for Begusarai showroom.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="/dealer"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 bg-brand-red text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-brand-red-600 shadow-md transition-colors"
                >
                  <span>Go to B2B Bulk Order Desk</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}

          {/* ================= STATE 3: CUSTOMER LOGIN FORM ================= */}
          {!isCustomerLoggedIn && !isDealerLoggedIn && activeTab === "customer" && (
            <div>
              {!otpStep ? (
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div className="text-center pb-2">
                    <h4 className="text-base font-black text-slate-900">
                      Login with Mobile Number
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      We'll send a 4-digit verification code to your phone.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9065224224"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                        className="w-full rounded-xl border border-slate-200 pl-12 pr-3.5 py-2.5 text-sm font-semibold tracking-wide focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg shadow-brand-red/30 transition-all active:scale-[0.99]"
                  >
                    <span>Send Verification Code</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    By signing in, you agree to Nanhey Accessories Terms of Service and Privacy Policy.
                  </p>
                </form>
              ) : (
                <form onSubmit={handleVerifyOTP} className="space-y-4">
                  <div className="text-center pb-1">
                    <h4 className="text-base font-black text-slate-900">
                      Enter 4-Digit Code
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Sent to <strong>+91 {mobileNumber}</strong>
                    </p>
                    <div className="mt-2 inline-block px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-[11px] text-amber-800 font-bold">
                      💡 Demo Simulation OTP: <span className="font-mono font-black text-brand-red">4224</span>
                    </div>
                  </div>

                  {/* 4-digit input */}
                  <div className="flex justify-center gap-3 my-4">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const newOtp = [...otp];
                          newOtp[i] = e.target.value;
                          setOtp(newOtp);
                        }}
                        className="w-12 h-12 text-center text-xl font-black rounded-xl border border-slate-300 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:outline-none"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg shadow-brand-red/30 transition-all active:scale-[0.99]"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Verify Code & Login</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <button
                      type="button"
                      onClick={() => setOtpStep(false)}
                      className="hover:text-brand-red underline"
                    >
                      Change Phone Number
                    </button>
                    <span>
                      {otpTimer > 0 ? (
                        `Resend in ${otpTimer}s`
                      ) : (
                        <button
                          type="button"
                          onClick={() => setOtpTimer(30)}
                          className="text-brand-red font-bold hover:underline"
                        >
                          Resend OTP
                        </button>
                      )}
                    </span>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ================= STATE 4: DEALER LOGIN FORM ================= */}
          {!isCustomerLoggedIn && !isDealerLoggedIn && activeTab === "dealer" && (
            <form onSubmit={handleDealerLogin} className="space-y-4">
              <div className="text-center pb-2">
                <h4 className="text-base font-black text-slate-900">
                  Dealer & Installer Login
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Access wholesale price catalogues and credit billing.
                </p>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                  GSTIN or Registered Dealer ID *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10AAGFN4224J1ZV or NA-DLR-48"
                    value={dealerCode}
                    onChange={(e) => setDealerCode(e.target.value.toUpperCase())}
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm font-mono uppercase focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                  Account PIN / Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={dealerPassword}
                    onChange={(e) => setDealerPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg transition-all active:scale-[0.99]"
              >
                <span>Access Dealer Portal</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="text-center pt-2 text-xs text-slate-500">
                <span>Not registered as a dealer yet? </span>
                <a
                  href="/dealer"
                  onClick={onClose}
                  className="text-brand-red font-bold hover:underline"
                >
                  Register Here
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
