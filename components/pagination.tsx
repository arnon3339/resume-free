'use client';

import { useRouter } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function MyPagination({current, total, en, sorts, ascs}: any) {
    const pages = [
        Math.floor(current/3)*3 + 1 - 1,
        Math.floor(current/3)*3 + 2 - 1,
        Math.floor(current/3)*3 + 3 - 1
    ];
    const actives = [
        current%3==0?true:false,
        current%3==1?true:false,
        current%3==2?true:false
    ];

    const getHref = (nextPage: number) =>{
        if (nextPage < 0) return `/pub?en=${en}&page=0&sorts=${sorts.join(',')}&ascs=${ascs.join(',')}`;
        else if (nextPage > total - 1) return `/pub?en=${en}&page=${total - 1}&sorts=${sorts.join(',')}&ascs=${ascs.join(',')}`;
        else return `/pub?en=${en}&page=${nextPage}&sorts=${sorts.join(',')}&ascs=${ascs.join(',')}`;
    };

    if (total - current > 3 && current > 2)
        return (
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href={getHref(current - 1)} id={String(en)}/>
                </PaginationItem>
                <PaginationEllipsis href={getHref(pages[1] - 3)}/>
                <PaginationItem>
                <PaginationLink href={getHref(pages[0])} isActive={actives[0]}>{pages[0] + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[1])} isActive={actives[1]}>
                    {pages[1] + 1}
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[2])} isActive={actives[2]}>{pages[2] + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis href={getHref(pages[1] + 3)}/>
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href={getHref(current + 1)} id={String(en)}/>
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        );
    else if (current > 3)
        return (
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href={getHref(current - 1)} id={String(en)}/>
                </PaginationItem>
                <PaginationEllipsis href={getHref(pages[1] - 3)}/>
                <PaginationItem>
                <PaginationLink href={getHref(pages[0])} isActive={actives[0]}>{pages[0] + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[1])} isActive={actives[1]}>
                    {pages[1] + 1}
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[2])} isActive={actives[2]}>{pages[2] + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href={getHref(current + 1)} id={String(en)}/>
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        );
    else if (current < total - 3)
        return (
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href={getHref(current - 1)} id={String(en)}/>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[0])} isActive={actives[0]}>{pages[0] + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[1])} isActive={actives[1]}>
                    {pages[1] + 1}
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href={getHref(pages[2])} isActive={actives[2]}>{pages[2] + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis href={getHref(pages[1] + 3)}/>
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href={getHref(current + 1)} id={String(en)}/>
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        );
    else
        return (
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href={getHref(current - 1)} id={String(en)}/>
                </PaginationItem>
                {Array.from({length: total}).map((eeee, iii) => 
                    (<PaginationItem key={`custom-pagination-${iii}`}>
                        <PaginationLink href={getHref(iii)} isActive={iii === current}>{iii + 1}</PaginationLink>
                    </PaginationItem>)
                )}
                <PaginationItem>
                <PaginationNext href={getHref(current + 1)} id={String(en)}/>
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        );
}
