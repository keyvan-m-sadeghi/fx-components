import React, { useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import {
    FxBox,
    FxButton,
    FxHeader,
    FxText,
    useToast,
} from '@functionland/component-library';
import { getWalletImage } from '../utils/media';
import { useUserProfileStore } from '../stores/useUserProfileStore';
import { copyToClipboard } from '../utils/clipboard';
import { Helper } from '../utils';
import { CopyIcon } from './Icons';

interface WalletDetailsProps {
    allowChangeWallet?: boolean
    showPeerId?: boolean
    showDID?: boolean,
    showBloxPeerIds?: boolean
}
export const WalletDetails = ({ allowChangeWallet, showPeerId, showDID, showBloxPeerIds = false }: WalletDetailsProps) => {
    const walletConnect = useWalletConnect();
    const [walletId, setWalletId, appPeerId, bloxPeerIds] = useUserProfileStore((state) => [
        state.walletId,
        state.setWalletId,
        state.appPeerId,
        state.bloxPeerIds
    ]);

    const { queueToast } = useToast()
    const [signiture, password] = useUserProfileStore(
        (state) => [state.signiture, state.password]
    );

    const DID = useMemo(() => {
        if (password && signiture)
            return Helper.getMyDID(password, signiture)
        return null
    }, [password, signiture])

    const handleChangeWallet = async () => {
        try {
            await walletConnect.killSession();
            const wallet = await walletConnect.connect();
            if (wallet.accounts[0] !== walletId) {
                setWalletId(wallet.accounts[0], true);
            }
        } catch (err) {
            console.log(err);
            queueToast({
                type: 'error',
                title: 'Error',
                message: err?.toString()
            })
        }
    };

    return (
        <FxBox paddingVertical="12" alignItems="center">
            {walletConnect.connected ?
                <>
                    <Image
                        source={
                            walletConnect.peerMeta?.name === 'MetaMask'
                                ? getWalletImage(walletConnect.peerMeta.name)
                                : { uri: walletConnect.peerMeta.icons[0] }
                        }
                        style={styles.image}
                    />
                    <FxText variant="body" textAlign="center">
                        {walletConnect.peerMeta.name}
                    </FxText>
                    <FxText variant="bodySmallRegular" textAlign="center" onPress={() => copyToClipboard(walletConnect.accounts[0])}>
                        {walletConnect.accounts[0]}
                    </FxText>
                </>
                :
                <FxText variant="body" marginBottom='24' textAlign="center">
                    You are not connected to any wallet
                </FxText>
            }
            {allowChangeWallet &&
                <FxButton
                    variant="inverted"
                    paddingHorizontal="16"
                    marginTop="16"
                    onPress={handleChangeWallet}
                >
                    Change Wallet
                </FxButton>}
            {password && signiture && showDID && (
                <FxBox marginTop='24' width="100%">

                    <FxButton
                        onPress={() => copyToClipboard(DID)}
                        iconLeft={<CopyIcon />}
                        flexWrap='wrap'
                        paddingHorizontal='32'
                    >
                        <FxBox style={{ flex: 1, width: 250 }}>
                            <FxText ellipsizeMode='tail' numberOfLines={1} style={{ width: 250 }}>{DID}</FxText>
                        </FxBox>
                    </FxButton>

                </FxBox>
            )}
            {appPeerId && showPeerId && (
                <FxBox marginTop='24' width='100%'>
                    <FxButton
                        onPress={() => copyToClipboard(appPeerId)}
                        iconLeft={<CopyIcon />}
                        flexWrap='wrap'
                        paddingHorizontal='32'
                    >
                        <FxBox style={{ flex: 1, width: 250 }}>
                            <FxText ellipsizeMode='tail' numberOfLines={1} style={{ width: 250 }}>{`PeerId:${appPeerId}`}</FxText>
                        </FxBox>
                    </FxButton>
                </FxBox>
            )}
            {bloxPeerIds && showBloxPeerIds && (
                <>
                    <FxHeader
                        alignSelf='flex-start'
                        marginTop='20'
                        title="Bloxs' PeerId"
                    />
                    <FxBox marginTop='24' width='100%'>
                        {bloxPeerIds?.map((bloxPeerId, index) =>
                            <FxButton
                                key={index}
                                onPress={() => copyToClipboard(bloxPeerId)}
                                iconLeft={<CopyIcon />}
                                flexWrap='wrap'
                                paddingHorizontal='32'
                            >
                                <FxBox style={{ flex: 1, width: 250 }}>
                                    <FxText ellipsizeMode='tail' numberOfLines={1} style={{ width: 250 }}>{`Blox#${index + 1}:${bloxPeerId}`}</FxText>
                                </FxBox>
                            </FxButton>)}

                    </FxBox>
                </>

            )}
        </FxBox>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
    },
});