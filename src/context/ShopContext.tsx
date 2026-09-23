"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  cartCount: number;
  cartTotal: number;
  cartTotalFormatted: string;
  wishlistCount: number;
  isCartOpen: boolean;
  quickViewProduct: Product | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const CART_STORAGE_KEY = "nanhey_cart_v2";
const WISHLIST_STORAGE_KEY = "nanhey_wishlist_v2";

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        // Pre-populate with 2 default starter items as specified in Phase 1
        const defaultStarterCart: CartItem[] = [
          {
            product: {
              id: "hd-cp-2.4-color",
              name: "CP Plus 2.4MP Full Color Guard+ Bullet Camera",
              brand: "CP Plus",
              category: "hd-camera",
              categoryName: "HD CCTV Camera",
              price: 1499,
              originalPrice: 1999,
              discount: "25% OFF",
              rating: 4.9,
              reviewCount: 142,
              inStock: true,
              warranty: "2 Years Brand Warranty",
              features: ["20M Warm LED Full Color", "Audio Mic Built-in", "IP67 Weatherproof"],
              specs: { resolution: "2.4MP 1080P", lens: "3.6mm" },
              description: "Industry leading full-color analog bullet camera from CP Plus.",
            },
            quantity: 1,
          },
          {
            product: {
              id: "dvr-cp-4ch-1080p",
              name: "CP Plus 4 Channel 1080P Full HD Digital Video Recorder",
              brand: "CP Plus",
              category: "dvr",
              categoryName: "DVR",
              price: 2999,
              originalPrice: 3999,
              discount: "25% OFF",
              rating: 4.8,
              reviewCount: 98,
              inStock: true,
              warranty: "2 Years Brand Warranty",
              features: ["H.265+ Compression", "Audio over Coaxial", "1 SATA Support"],
              specs: { channels: "4 Channels", resolution: "1080P" },
              description: "Reliable 4-channel DVR with coaxial audio and mobile view.",
            },
            quantity: 1,
          },
        ];
        setCart(defaultStarterCart);
      }

      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch (e) {
      console.warn("Could not read from localStorage:", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn("Could not save cart to localStorage:", e);
    }
  }, [cart, isHydrated]);

  // Save wishlist to localStorage on change
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.warn("Could not save wishlist to localStorage:", e);
    }
  }, [wishlist, isHydrated]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prevCart, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cart]);

  const cartTotalFormatted = useMemo(() => {
    return `₹${cartTotal.toLocaleString("en-IN")}`;
  }, [cartTotal]);

  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        cartTotal,
        cartTotalFormatted,
        wishlistCount,
        isCartOpen,
        quickViewProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
        openCart,
        closeCart,
        toggleCart,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
