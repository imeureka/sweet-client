import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { FriendsGiftsType } from '../../../types/room';

interface FriendGiftResponse extends Response {
  data: FriendsGiftsType;
}

export const FRIEND_GIFT_QUERY_KEY: string[] = ['friendGiftData'];

export const fetchFriendGift = async (roomId: number): Promise<FriendGiftResponse> =>
  get(`/gift/friend/${roomId}`);

const useGetFriendGift = ({ roomId }: { roomId: number }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [FRIEND_GIFT_QUERY_KEY, roomId],
    queryFn: () => fetchFriendGift(roomId),
  });

  return { data, isLoading, isError };
};

export default useGetFriendGift;